const dataDiv = document.querySelector("#data-container")
const div = document.querySelector("#inside-content-container")//Gets div where we put data
dataDiv.style.display = "none";

//API
const EUWserv = "https://euw1.api.riotgames.com/"
//const NAserv = "https://na1.api.riotgames.com/"
const summoner = "lol/summoner/v4/summoners/by-name/"
const rank = "lol/league/v4/entries/by-summoner/"
//Fetching data


let server = EUWserv

function fetchData(){
    let type = summoner
    let player = document.querySelector('#player').value
let url = server + type + player + apikey
fetch(url)
.then (response => response.json())//Takes response
.then(data => {appendData(data)})//Starts function appendData
.catch(function (err){console.log(err)})//If error, send error message

}
//Displaying it
function appendData(data){
    dataDiv.style.display = "block";

    div.innerHTML = '<h4>' + data.name + '</h4><br><h4> Level ' + data.summonerLevel + '</h4>'//Inside div, display name and level
    //Adds to page
    var player = data.id
    rankData(player)
}

function rankData(player){
type = rank
console.log(type)

console.log(player)
let url = server + type + player + apikey
console.log(url)
fetch(url)
.then (response => response.json())//Takes response
.then(rank => {appendAdd(rank)})//Starts function appendData
.catch(function (err){console.log(err)})//If error, send error message
}

function appendAdd(data){
console.log("appendAdd")
    console.log(data)
div.innerHTML = div.innerHTML + '<br><h4>' + data[0].tier + ' ' + data[0].rank + '</h4><br><h4>' + data[0].leaguePoints + ' LP</h4>'
}