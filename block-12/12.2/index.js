const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '28o51994',
    database: 'in_class',
});

db.connect((err) => {
    if (err) throw err;

    console.log(`connected as ${db.threadId}`);

    // addNewSong('Welcome to Paradise', 'Green Day', 'Punk');
    deleteArtist('Green Day');
    getAllSongs();

    db.end();
});

function addNewSong(title, artist, genre) {
    const sql = 'INSERT INTO songs SET ?';
    const newSong = {
        title,
        artist,
        genre,
    };

    db.query(sql, newSong, (err, res) => {
        if (err) throw err;

        console.log(`${artist}, ${title} successfully inserted`);
    });
}

function getAllSongs() {
    const sql = 'SELECT * FROM songs';

    db.query(sql, (err, res) => {
        if (err) throw err;

        res.forEach((song) => {
            const { title, artist, genre } = song;

            console.log(`----------\nTitle:\t${title}\nArtist:\t${artist}\nGenre:\t${genre}\n----------`);
        });
    });
}

function deleteArtist(artist) {
    const sql = 'DELETE FROM songs WHERE ?';
    const target = {
        artist,
    };

    db.query(sql, target, (err, res) => {
        if (err) throw err;

        console.log(`All songs by ${artist} have been removed`);
    });
}
