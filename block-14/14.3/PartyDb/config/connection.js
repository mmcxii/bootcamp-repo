const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nich',
    password: '123456',
    database: 'parties_db',
});

module.exports = db;
