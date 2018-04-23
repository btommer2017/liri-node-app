require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys  = require('./keys.js');
// var token = require('./keys.js');

var spotify = new Spotify(keys.spotify)

spotify.search({type:'', query:"Debaser"}, function(error,data){
  if(error){
      console.log(`The call to Spotify encountered an error: ${error}`);
      return;
  }else{
        // if no error was encountered, print the return data: 
    console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);


        


// console.log(spotify);
console.log(data.tracks);
  }
});



 

 
