const inquierer = require('inquirer');

inquierer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'Please enter your password:',
            name: 'password',
        },
        {
            type: 'list',
            message: 'Which car do you choose?',
            choices: ['mustand', 'a different mustang', 'jaloppy', 'oldsmobile'],
            name: 'car',
        },
        {
            type: 'confirm',
            message: 'Are you sure?',
            name: 'confirm',
            default: true,
        },
    ])
    .then((res) => {
        console.log(`Welcome ${res.username}`);
    });
