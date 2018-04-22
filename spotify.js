require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys  = require('./keys.js');
var token = require('./keys.js');

var spotify = new Spotify(keys.spotify)

// var spotify = new Spotify({
//     id: keys.spotify,
//     // secret: token.spotify
//   });
 
spotify.search({ type: 'track', query: 'Debaser' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



 

 
