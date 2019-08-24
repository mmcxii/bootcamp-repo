// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
const NodeGeocoder = require('node-geocoder');

// Replace with your mapquest consumer API key
const options = {
    provider: 'mapquest',
    apiKey: 'Z9z8G7t436RVFb0ilTBCliFkPsDAVmfY',
};

// Create a geocoder object that can query the mapquest API
const geocoder = NodeGeocoder(options);

// Take in the command line arguments
const args = process.argv.slice(2);

// Build your address as an array or string
geocoder.geocode(JSON.stringify(args), (err, res) => {
    if (err) {
        return console.error(err);
    }
    console.log(JSON.stringify(res, 'pretty-print', 2));
});

// Then use the geocoder object to search the address
