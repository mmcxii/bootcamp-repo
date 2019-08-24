const mysql = require('mysql');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '28o51994',
    database: 'great_bay',
});

inquirer
    .prompt([
        {
            message: 'Welcome to Great Bay! Would you like to Post an Item for Sale or Bid on an Item?',
            choices: ['POST AN ITEM', 'BID ON AN ITEM'],
            name: 'choice',
            type: 'list',
        },
    ])
    .then((res) => {
        switch (res.choice) {
            case 'POST AN ITEM':
                postItem();
                break;
            case 'BID ON AN ITEM':
                bidOnItem();
                break;
        }
    });

function postItem() {
    inquirer
        .prompt([
            {
                message: 'What item will you be selling?',
                name: 'item_name',
                type: 'input',
            },
            {
                message: 'How much does it cost?',
                name: 'price',
                type: 'input',
            },
            {
                message: 'How many do you have to sell?',
                name: 'stock',
                type: 'input',
            },
        ])
        .then((res) => {
            const { item_name, price, stock } = res;

            const sql = 'INSERT INTO products SET ?';
            const newItem = { item_name, price, stock };

            db.query(sql, newItem, (err, res) => {
                if (err) throw err;

                console.log(`${item_name} was successfully added to the database.`);

                db.end();
            });
        });
}

function bidOnItem() {
    let products = [];

    displayItems(products);
}

function displayItems(products) {
    const sql = 'SELECT * FROM products';

    db.query(sql, (err, res) => {
        if (err) throw err;

        res.forEach((item) => {
            const { id, item_name, price } = item;

            products.push(`${id}: ${item_name} Current bid: $${price}`);
        });

        inquirer
            .prompt([
                {
                    message: 'Which item would you like to bid on?',
                    choices: products,
                    type: 'list',
                    name: 'choice',
                },
                {
                    message: 'What is your bid?',
                    name: 'bid',
                    type: 'input',
                },
            ])
            .then((res) => {
                const { choice, bid } = res;
            });
    });
}
