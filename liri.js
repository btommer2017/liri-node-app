require("dotenv").config();

var request = require("request");
var Twitter = require("twitter")
var Spotify = require('node-spotify-api');
var keys  = require('./keys.js');
var spotify = new Spotify(keys.spotify)
var twitter = new Twitter(keys.twitter);
// Store all of the arguments in an array
var nodeArgs = process.argv;
// console.log(nodeArgs);
// Create an empty variable for holding the movie name
var movieName = "";
var songName = "";
// console.log(process.argv[2]);
if (process.argv[2] === "movie-this") getOdbm();
if (process.argv[2] === "spotify-this-song") getSpotify(); 
if (process.argv[2] === "my-tweets")  getTwitter();
if (process.argv[2] === "do-what-it-says")  getOdbm();

function getOdbm() {
if (process.argv[3] == undefined) {
  movieName = "Mr.+Nobody";
}
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}
// Then run a request to the OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

request(queryUrl, function(error, response, body) {
if (error) {
  return; console.log(error);
}
  // If the request is successful
 else if (!error && response.statusCode === 200) {

    if (JSON.parse(body).Title != undefined)  console.log("Title: " + JSON.parse(body).Title); 
    if (JSON.parse(body).Year != undefined)  console.log("Release Year: " + JSON.parse(body).Year);
    if (JSON.parse(body).imdbRating != undefined)  console.log("imdbRating: " + JSON.parse(body).imdbRating);
    if ((typeof (JSON.parse(body).Ratings[1])) == "undefined") {console.log("Rotten Tomatoes Rating: No Ratings Available")} 
    else {(console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value))}      
    if (JSON.parse(body).Country != undefined)  console.log("Country Produced In: " + JSON.parse(body).Country);
    if (JSON.parse(body).Language != undefined)  console.log("Language: " + JSON.parse(body).Language);
    if (JSON.parse(body).Plot != undefined)  console.log("Plot: " + JSON.parse(body).Plot);
    if (JSON.parse(body).Actors != undefined)  console.log("Actors: " + JSON.parse(body).Actors);
  }
});
}

function getSpotify() {
  if (process.argv[3] == undefined) {
    songName = "Ace+Of+Base";
  }
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    }
    else {
      songName += nodeArgs[i];
    }
  }
spotify.search({type:'track', query: songName, limit: '1'}, function(error,data){
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
}

function getTwitter(){
  twitter.get('statuses/user_timeline', function(error, tweet, response){
		if (error) { 
      return console.log("Sorry No Tweets Available")
      } else {
      for (let i=0; i<tweet.length; i++) {
            var twitterData = ("#"+(i+1)+": "+tweet[i].created_at + '\n' + tweet[i].text);
                  console.log(twitterData);
                    console.log("----------------------------------------------");
                        }
               };
	});
}
