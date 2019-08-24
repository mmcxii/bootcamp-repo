const mysql = require('mysql');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '28o51994',
    database: 'top_songs_db',
});

inquirer
    .prompt([
        {
            message: 'What would you like to do?',
            choices: [
                'Search for an artist',
                'See artists who appear more than once',
                'See songs between two years',
                'Search for specific song',
                'Search for years in which an artist had both a song in the top 5,000 and album in the top 3,000',
            ],
            type: 'list',
            name: 'choice',
        },
    ])
    .then((res) => {
        const { choice } = res;

        switch (choice) {
            case 'Search for an artist':
                songsByArtist();
                break;

            case 'See artists who appear more than once':
                moreThanOnce();
                break;

            case 'See songs between two years':
                withinYears();
                break;

            case 'Search for specific song':
                searchForSong();
                break;

            case 'Search for years in which an artist had both a song and album in the top 5,000':
                songAndAlbumInYear();
                break;
        }
    });

function songsByArtist() {
    inquirer
        .prompt([
            {
                message: 'Which artist would you like to search for? (Case and Punctuation specific)',
                type: 'input',
                name: 'artist',
            },
        ])
        .then((res) => {
            const { artist } = res;

            const sql = `SELECT * FROM songs WHERE artist = '${artist}'`;

            db.query(sql, (err, res) => {
                if (err) throw err;

                console.log(`There are ${res.length} songs by ${artist} in the top 5,000:`);
                res.forEach((song) => {
                    const { title, year, position } = song;

                    console.log(`#${position}: ${title}, ${year}`);
                });

                db.end();
            });
        });
}

function moreThanOnce() {
    const artists = [];

    const sql = 'SELECT artist, COUNT(artist) FROM songs GROUP BY(artist) HAVING COUNT(artist) > 1';

    db.query(sql, (err, res) => {
        if (err) throw err;

        res.forEach((item) => {
            const { artist } = item;

            artists.push({ artist, count: item['COUNT(artist)'] });
        });

        artists.sort(compare);

        artists.forEach((item) => {
            const { artist, count } = item;
            console.log(`${artist} appears ${count} times`);
        });

        db.end();
    });

    function compare(a, b) {
        const aCount = a.count;
        const bCount = b.count;

        let comparison = 0;
        if (aCount > bCount) {
            comparison = 1;
        } else if (aCount < bCount) {
            comparison = -1;
        }
        return comparison;
    }
}

function withinYears(start, end) {
    inquirer
        .prompt([
            {
                message: 'What year would you like to be your starting point? (YYYY)',
                type: 'input',
                name: 'start',
            },
            {
                message: 'Whar year would you like to be your ending point? (YYYY)',
                type: 'input',
                name: 'end',
            },
        ])

        .then((res) => {
            const { start, end } = res;

            const sql = `SELECT * FROM songs WHERE year BETWEEN ${start} AND ${end}`;

            db.query(sql, (err, res) => {
                if (err) throw err;

                console.log(`Found ${res.length} songs between ${start} and ${end}.`);

                res.forEach((song) => {
                    const { position, artist, title, year } = song;

                    console.log(`#${position}: ${title}, ${artist}, ${year}`);
                });

                db.end();
            });
        });
}

function searchForSong() {
    inquirer
        .prompt([
            {
                message: 'What song would you like to search for? (Case and Punctuation specific)',
                type: 'input',
                name: 'song',
            },
        ])
        .then((res) => {
            const { song } = res;

            const sql = `SELECT * FROM songs WHERE title ='${song}'`;

            db.query(sql, (err, res) => {
                if (err) throw err;

                console.log(`Found ${res.length} ${res.length === 1 ? 'song' : 'songs'}`);

                res.forEach((song) => {
                    const { position, artist, title, year } = song;

                    console.log(`#${position}: ${title}, ${artist}, ${year}`);
                });

                db.end();
            });
        });
}

function songAndAlbumInYear() {
    const artist = 'Queen';

    const sql = `SELECT
                albums.year,
                albums.album_title,
                albums.artist,
                albums.position,
                songs.title
                FROM albums
                INNER JOIN songs
                ON 
                (
                albums.artist = songs.artist
                AND
                albums.year = songs.year
                )
                WHERE
                (
                albums.artist = '${artist}'
                AND
                songs.artist = '${artist}'
                )`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        res.forEach((item) => {
            console.log(item);
        });

        db.end();
    });
}
