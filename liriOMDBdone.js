// require("dotenv").config();

// var client = new Twitter(keys.twitter);
// var spotify = new Spotify(keys.spotify);


var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;
var movieName = "";
// console.log(process.argv[2]);
if (process.argv[2] === "movie-this") {

// Create an empty variable for holding the movie name

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

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

request(queryUrl, function(error, response, body) {
if (error) {
  queryUrl = "http://www.omdbapi.com/?t=" + "Mr.+Nobody" + "&y=&plot=short&apikey=trilogy"; 
}
  // If the request is successful
 else if (!error && response.statusCode === 200) {
    //  console.log(typeof (JSON.parse(body).Title))
    //  console.log(typeof (JSON.parse(body).Year))
    //  console.log(typeof (JSON.parse(body).imdbRating))
    //  console.log(typeof (JSON.parse(body).Country))
    //  console.log(typeof (JSON.parse(body).Language))
    //  console.log(typeof (JSON.parse(body).Plot))
    //  console.log(typeof (JSON.parse(body).Actors))
    //  console.log(typeof (JSON.parse(body).Ratings))
    //  console.log(typeof (JSON.parse(body).Ratings[1].Value))
    //  if ((typeof (JSON.parse(body).Ratings[1])) == "undefined") {} console.log("YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
    // Parse the body of the site to recover information
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


