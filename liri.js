require("dotenv").config(); //require .env

const keys = require("./keys.js"); // require keys.js
const Spotify = require('node-spotify-api'); // node-spotify-api package
const spotify = new Spotify(keys.spotify); 
const axios = require('axios');

const operation = process.argv[2]; // liri command operation
const term = process.argv[3]; // liri search term


if(operation==="spotify-this-song"){
   
  spotify.search({ type: 'track', query: term }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}



else if(operation==="concert-this"){
  axios.get(url= 'https://rest.bandsintown.com/artists/' + term + '/events?app_id=codingbootcamp')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  

}


else if(operation==="movie-this"){
  axios.get(url= 'http://www.omdbapi.com/?apikey=trilogy&' + term )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}