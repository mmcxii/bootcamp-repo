// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
const inquire = require('inquirer');
const knownPw = 'kek';

inquire
    .prompt([
        {
            message: 'Enter your name:',
            type: 'input',
            name: 'username',
        },
        {
            message: 'Enter your password:',
            type: 'password',
            name: 'password',
        },
        {
            message: 'How are you feeling today?',
            choices: ['happy', 'sad', 'mac'],
            type: 'list',
            name: 'feeling',
        },
        {
            message: 'Do you consent to having your data mined?',
            type: 'confirm',
            default: true,
            name: 'datamined',
        },
        {
            message: 'What would you like for lunch today?',
            choices: ['burger', 'pizza', 'fries', 'soda'],
            type: 'checkbox',
            name: 'checkbox',
        },
    ])
    .then((res) => {
        console.log(knownPw);
        console.log(res.password);
        if (res.password !== knownPw) {
            return console.log('Error: Unknown user');
        }

        console.log(`Welcome back ${res.username}.`);

        switch (res.feeling) {
            case 'happy':
                console.log('We are glad you are having a good day today!');
                break;

            case 'sad':
                console.log("Aww that's too bad. Life sucks then ya die though so whatcha gonna do?");
                break;

            case 'mac':
                console.log('aw fuck how did you let this happen?');
                break;
        }

        console.log(
            res.dataminded
                ? "Man you're a bit of an idiot aren't you?"
                : 'Oh good! You are a responsible internet citizen!'
        );

        console.log(
            `For lunch today you will be having: ${res.checkbox.join(', ')}. ${
                res.checkbox.length > 2 ? "Man that's a bit much, don't you think?" : ''
            }`
        );
    });
