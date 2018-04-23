# liri-node-app

Use the command line using these key words after typing node liri.js:

my-tweets /n
node liri.js my-tweets will show my last 20 tweets

spotify-this-song
node liri.js spotify-this-song Hey Jude will produce an Artist Name, Song Name, a song preview URL, and the song's Album for the song 'Hey Jude'
If the user doesn't list a song and only types 'node liri.js spotify-this-song', The Sign by Ace of Base will be the default song.

movie-this
node liri.js movie-this The Terminator will produce the Title, Release Year, imdbRating, Country, Language, Rotten Tomatoes Rating, Plot, and Actors for the movie 'The Terminator'.  If only 'node liri.js movie-this' is typed, it will default to the movie 'Mr. Nobody'

do-what-it-says
node liri.js do-what-it-says will read the text file random.txt and use the information to run more code.  Right now it contains spotify-this-song,"I Want it That Way".  It takes the argument 'spotify-this-song' to run the Spotify function to get the information for 'I Want it That Way'.  If the text is changed to movie-this,"The Terminator", it will run the movie-this function and produce results for 'The Terminator'
