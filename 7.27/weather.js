const readline = require('readline');
const request = require('request');
const { parse } = require('request/lib/cookies');
const rl = readline.createInterface(process.stdin,process.stdout);

rl.question(" oruulnuu? ", (answer)=>{
    
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${answer}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ `,
    function (error, response, body) {
    console.log('body:', JSON.parse(body).features[0].center); // Print the HTML for the Google homepage.
});
    rl.close();
})

                                                                                     