const inquirer = require('inquirer');

class Player {
    constructor(name, position, offense, defense) {
        this.name = name;
        this.position = position;
        this.offense = offense;
        this.defense = defense;
    }

    goodGame() {
        const statBoost = 1;

        if (coinFlip()) {
            if (coinFlip()) {
                this.offense += statBoost;

                console.log("The team's offense has been increased!");
            } else {
                this.defense += statBoost;
                console.log("The team's defense has been increased!");
            }
        }
    }

    badGame() {
        const statBoost = 1;

        if (coinFlip()) {
            if (coinFlip()) {
                this.offense -= statBoost;
                console.log("The team's offense has been decreased!");
            } else {
                this.defense -= statBoost;
                console.log("The team's defense has been decreased!");
            }
        }
    }

    printStats() {
        for (const attr in this) {
            console.log(`${attr}: ${this[attr]}`);
        }
    }
}

function coinFlip() {
    return r(1);
}

function r(max) {
    return Math.round(Math.random() * max);
}

const starters = [];
const subs = [];

function newPlayer() {
    inquirer
        .prompt([
            {
                message: "What is the player's name?",
                name: 'name',
                type: 'input',
            },
            {
                message: 'Is the player a starter or a sub?',
                choices: ['Starter', 'Sub'],
                name: 'position',
                type: 'list',
            },
            {
                message: "What is this player's offense? (1-10)",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                name: 'offense',
                type: 'list',
            },
            {
                message: "What is this player's defense? (1-10)",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                name: 'defense',
                type: 'list',
            },
        ])
        .then((res) => {
            const { name, position, offense, defense } = res;

            const player = new Player(name, position, offense, defense);

            if (player.position === 'Starter') {
                starters.push(player);
                console.log(`Starter ${starters.length} added.`);
            } else {
                subs.push(player);
                console.log(`Sub ${subs.length} added.`);
            }

            if (starters.length + subs.length < 3) {
                newPlayer();
            } else {
                console.log('Starters:');
                starters.forEach((player) => {
                    player.printStats();
                    console.log('-----');
                });

                console.log('Sub:');
                subs.forEach((sub) => sub.printStats());

                game();
            }
        });
}

let roundCounter = 0;

function game() {
    const rollOne = r(20);
    const rollTwo = r(20);
    let teamAtk = 0;
    let teamDef = 0;
    let teamScore = 0;

    starters.forEach((starter) => (teamAtk += starter.offense));
    starters.forEach((starter) => (teamDef += starter.defense));

    if (teamAtk > rollOne) {
        teamScore++;
    }

    if (teamDef < rollTwo) {
        teamScore--;
    }

    inquirer
        .prompt([
            {
                message: 'Would you like to sub out a player?',
                choices: ['Yes', 'No'],
                name: 'wantSub',
                type: 'list',
            },
        ])
        .then((res) => {
            if (res.wantSub === 'Yes') {
                inquirer
                    .prompt([
                        {
                            message: 'Who do you want to sub out?',
                            choices: [starters[0].name, starters[1].name],
                            name: 'sub',
                            type: 'list',
                        },
                    ])
                    .then((res) => {
                        // Pushes the player in the starters array which matches the name of the chosen player
                        subs.push(starters.filter((player) => player.name === res.sub));

                        // Filters out the chosen player from the starters array
                        starters.filter((player) => player.name !== res.sub);

                        // Sends the original sub to the starters array
                        starters.push(subs.shift());
                    });
            }

            roundCounter++;

            if (roundCounter < 5) {
                game();
            } else {
                if (teamScore > 0) {
                    starters.forEach((player) => player.goodGame());
                } else if (teamScore < 0) {
                    starters.forEach((player) => player.badGame());
                }

                starters.forEach((player) => player.printStats());

                subs.forEach((player) => player.printStats());

                inquirer
                    .prompt([
                        {
                            message: 'Would you like to play again?',
                            choices: ['Yes', 'No'],
                            name: 'playAgain',
                            type: 'list',
                        },
                    ])
                    .then((res) => {
                        if (res.playAgain === 'Yes') {
                            roundCounter = 0;
                            game();
                        } else {
                            console.log('Thanks for playing!');
                        }
                    });
            }
        });
}

newPlayer();
