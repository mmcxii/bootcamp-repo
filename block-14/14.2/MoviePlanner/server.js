const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'nich',
    password: '123456',
    database: 'movie_planner_db',
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM movies';

    db.query(sql, (err, data) => {
        if (err) throw err;

        res.render('index', { data });
    });
});

app.post('/movies', (req, res) => {
    const { title } = req.body;
    const sql = 'INSERT INTO movies ?';
    const newMovie = [title];

    db.query(sql, newMovie, (err, data) => {
        if (err) throw err;

        return res.send(data);
    });
});

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
