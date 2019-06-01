const favBands = [
    'rush',
    'pink floyd',
    'yes',
    'post malone',
    'boston',
    'matchbox twenty',
    'bonnie tyler',
    'paul simon',
    'jonathan coulton',
];

let areWeFriends = prompt('What is your favorite band?').toLowerCase();

while (areWeFriends != 'quit') {
    if (favBands.indexOf(areWeFriends) == -1) {
        alert("Nah. They're pretty lame");
    } else {
        alert('YEAH I LOVE THEM!');
    }

    areWeFriends = prompt("What is your next favorite band? (Type 'quit' to quit)").toLowerCase();
}

alert('k bai');
