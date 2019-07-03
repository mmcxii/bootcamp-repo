// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
    apiKey: 'AIzaSyCeoZ8F3J9Jrtr2NpEyPAUrqW_et0fEeiY',
    authDomain: 'in-class-test-746ef.firebaseapp.com',
    databaseURL: 'https://in-class-test-746ef.firebaseio.com',
    projectId: 'in-class-test-746ef',
    storageBucket: '',
    messagingSenderId: '949053777825',
    appId: '1:949053777825:web:79a2db51506fda6f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
// var database = ...
const db = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = 'No one :-(';
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

db.ref().on(
    'value',
    (res) => {
        const data = res.val().codersBay;
        console.log(data);

        // If Firebase has a highPrice and highBidder stored (first case)
        if (data.highPrice !== undefined && data.highBidder !== undefined) {
            // Set the variables for highBidder/highPrice equal to the stored values in firebase.
            highPrice = data.highPrice;
            highBidder = data.highBidder;

            // Change the HTML to reflect the stored values
            $('#highest-bidder').text(highBidder);
            $('#highest-price').text(highPrice);

            // Print the data to the console.
            console.log(highBidder, highPrice);

            // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
        } else {
            // Change the HTML to reflect the initial values
            $('#highest-bidder').text(highBidder);
            $('#highest-price').text(highPrice);

            // Print the data to the console.
        }
    },
    (err) => console.error(err)
);

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$('#submit-bid').on('click', (e) => {
    // prevent form from submitting with event.preventDefault() or returning false
    e.preventDefault();

    // Get the input values
    const bid = parseInt(
        $('#bidder-price')
            .val()
            .trim()
    );
    const name = $('#bidder-name')
        .val()
        .trim();

    // Log the Bidder and Price (Even if not the highest)
    console.log(bid, name);

    // If Then statements to compare against previous high bidder

    if (bid === 1) highPrice = 0;

    if (bid > highPrice) {
        // Alert that they are High Bidder
        alert('You are the new highest bidder!');

        // Save the new price in Firebase
        db.ref('codersBay').set({
            highBidder: name,
            highPrice: bid,
        });

        // Log the new High Price
        console.log(bid);

        // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
        highPrice = bid;
        highBidder = name;

        // Change the HTML to reflect the new high price and bidder
        $('#highest-bidder').text(highBidder);
        $('#highest-price').text(highPrice);

        // Else tell user their bid was too low via alert
    } else {
        alert(`Your bid of ${bid} was not more than the current highest bid of ${highPrice}.`);
    }
});
