// dependency for inquirer npm package
var inquirer = require('inquirer');

const team = [];

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
    console.log(
        'Name: ' +
            this.name +
            '\nPosition: ' +
            this.position +
            '\nAge: ' +
            this.age +
            '\nLanguages: ' +
            this.language
    );
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.

let counter = 0;
function generateNewProgrammer() {
    if (counter < 5) {
        inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    name: 'position',
                    message: 'What is your current position?',
                },
                {
                    name: 'age',
                    message: 'How old are you?',
                },
                {
                    name: 'language',
                    message: 'What is your favorite programming language?',
                },
            ])
            .then(function(answers) {
                // initializes the variable newProgrammer to be a programmer object which will take
                // in all of the user's answers to the questions above
                var newProgrammer = new Programmer(
                    answers.name,
                    answers.position,
                    answers.age,
                    answers.language
                );

                team.push(newProgrammer);

                counter++;
                console.log(`Programmer ${counter} added!\n`);

                generateNewProgrammer();
            });
    } else {
        team.forEach((mem) => {
            mem.printInfo();
            console.log('-----');
        });
    }
}

generateNewProgrammer();
