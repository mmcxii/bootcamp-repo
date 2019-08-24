const fs = require('fs');

const trans = process.argv[2];

const transAmnt = process.argv[3];

function userInput(transaction, amount) {
    switch (transaction) {
        case 'total':
            total();
            break;

        case 'deposit':
            deposit(amount);
            break;
        case 'withdraw':
            withdraw(amount);
            break;

        case 'lotto':
            lotto();

            break;
        default:
            console.log(
                'Please select one of the following options:\ntotal,\ndeposit (ammount),\nwithdraw (ammount),\nlotto'
            );
            break;
    }
}

userInput(trans, transAmnt);

function total() {
    fs.readFile('bank.txt', 'utf8', (err, data) => {
        error(err);

        const arr = data.split(', ');
        let total = 0;

        arr.forEach((val) => {
            const num = parseFloat(val);

            total += num;
        });

        console.log(`Present Balance: $${total.toFixed(2)}`);
    });
}

function deposit(amount) {
    if (!parseFloat(amount)) {
        return console.log('Please enter a valid number to deposit');
    }

    fs.appendFile('bank.txt', `, ${amount}`, (err) => {
        error(err);

        console.log(`Successfully deposited: $${amount}`);
    });
}

function withdraw(ammount) {
    if (!parseFloat(amount)) {
        return console.log('Please enter a valid number to withdraw');
    }

    fs.appendFile('bank.txt', `, -${amount}`, (err) => {
        error(err);

        console.log(`Successfully withdrew: $${amount}`);
    });
}

function lotto() {
    const lottoNum = Math.round(Math.random());
    const prizeMoney = 5;
    const lossMoney = -0.25;
    let winner = false;

    if (lottoNum === 1) {
        console.log(`You won! Now depositing $${prizeMoney} into your account.`);
        winner = true;
    } else if (lottoNum === 0) {
        console.log(
            `You lost! Very sad! Your account will be deducted $${lossMoney}. Maybe get a job instead of playing the Stupid Tax?`
        );
    }

    fs.appendFile('bank.txt', `, ${winner ? prizeMoney : lossMoney}`, (err) => {
        error(err);

        console.log('Bank account has been updated.');
    });
}

function error(err) {
    if (err) {
        return console.error(err);
    }
}
