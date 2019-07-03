// Initialize Firebase (YOUR OWN APP)
const firebaseConfig = {
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

const db = firebase.database();

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
db.ref().on(
    'value',
    (res) => {
        // Print the initial data to the console.
        console.log(res.val());

        // Change the html to reflect the initial value.
        const count = res.val().clickCount;

        $('#click-value').text(count);

        // Change the clickCounter to match the data in the database
        clickCounter = count;

        // Log the value of the clickCounter
        console.log(clickCounter);

        // Change the HTML Value
        $('#click-value').text(clickCounter);
    },
    // If any errors are experienced, log them to console.
    (err) => console.error(err)
);

// --------------------------------------------------------------

// Whenever a user clicks the click button
$('#click-button').on('click', function() {
    // Reduce the clickCounter by 1
    clickCounter--;

    if (clickCounter === 0) {
        // Alert User and reset the counter
        alert(`Congrats on clicking a button ${initialValue} times. I guess.`);

        clickCounter = initialValue;
    }

    // Save new value to Firebase
    db.ref().set({
        clickCount: clickCounter,
    });
    // Log the value of clickCounter
    console.log(clickCounter);
});

// Whenever a user clicks the restart button
$('#restart-button').on('click', function() {
    // Set the clickCounter back to initialValue
    clickCounter = initialValue;

    // Save new value to Firebase
    db.ref().set({
        clickCount: clickCounter,
    });

    // Log the value of clickCounter
    console.log(clickCounter);

    // Change the HTML Values
    $('#click-value').text(clickCounter);
});
