require("dotenv").config();
var keys  = require('./keys.js');
var Twitter = require("twitter");
var twitter = new Twitter(keys.twitter);


    twitter.get('statuses/user_timeline', function(error, tweet, response){
		if (!error) {
	        for (let i=0; i<tweet.length; i++) {
	            var twitterData = (tweet[i].created_at + '\n' + tweet[i].text + '\n');
	            console.log(twitterData);
                console.log("----------------------------------------------");
              
	        }
        }
        else {
            // if error is true, log to the console that we ran into an error and instruct the user to try again
            console.log("THERE WAS AN ERROR PLEASE TRY AGAIN")
            
        };
	});
