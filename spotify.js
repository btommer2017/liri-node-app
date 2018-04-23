require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys  = require('./keys.js');
// var token = require('./keys.js');

var spotify = new Spotify(keys.spotify)

spotify.search({type:'track', query:"Yesterday", limit: '1'}, function(error,data){
  if(error){
      console.log(`Spotify encountered an error: ${error}`);
      return;
  }else{
        // print the return data: 
    console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview URL: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
// console.log(spotify);
// console.log(data.tracks.items[0]);

  }
});



 

 
