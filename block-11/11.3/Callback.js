const fs = require('fs');

// Write a function that logs a message, then executes
// a function argument.
function logThenCb(msg, cb) {
    console.log(msg);

    cb();
}

logThenCb('suh dude', () => {
    console.log('Hello from the cb!');
});

// Write a function that runs a function argument if
// its other argument is truthy.

function cbIfTruthy(arg, cb) {
    if (arg) {
        cb();
    }
}

cbIfTruthy(1, () => {
    console.log('It was truthy!');
});

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function cbWithArg(arg, arg2, cb) {
    cb(arg, arg2);
}

const smile = ':)';
const frown = ':(';

cbWithArg(smile, frown, (f, g) => {
    console.log(f + g);
});

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

const data = 'howdy';
fs.writeFile('log.txt', data, (err) => {
    if (err) throw err;
});
