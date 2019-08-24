const express = require('express');
const mysql = require('mysql');
const exhbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '28o51994',
    database: 'seinfeld',
});

//* Middleware
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//* Routes
app.get('/:castMember', (req, res) => {
    const { castMember } = req;

    const sql = `SELECT * FROM actors WHERE name = '${castMember}'`;

    db.query(sql, (err, dbRes) => {
        if (err) throw err;

        res.render('index', dbRes);
    });
});

//* Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
