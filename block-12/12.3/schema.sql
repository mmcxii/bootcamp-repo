CREATE DATABASE top_songs_db;

USE top_songs_db;

CREATE TABLE songs
(
    position INT
    AUTO_INCREMENT,
    artist VARCHAR
    (100) NOT NULL,
    title VARCHAR
    (100) NOT NULL,
    year INT,
    raw_pop FLOAT,
    usa_pop FLOAT,
    uk_pop FLOAT,
    eu_pop FLOAT,
    world_pop FLOAT,
    PRIMARY KEY
    (position)
);

    INSERT INTO songs
        (artist, title, year, raw_pop, usa_pop, uk_pop, eu_pop, world_pop)
    VALUES
        ('', '', , , , , , );

CREATE TABLE albums
(
    position INT AUTO_INCREMENT,
    artist VARCHAR(100) NOT NULL,
    album_title VARCHAR(100) NOT NULL,
    year INT,
    raw_pop FLOAT,
    usa_pop FLOAT,
    uk_pop FLOAT,
    eu_pop FLOAT,
    world_pop FLOAT,
    PRIMARY KEY
    (position)
);

INSERT INTO albums
        (artist, album_title, year, raw_pop, usa_pop, uk_pop, eu_pop, world_pop)
    VALUES
        ('', '', , , , , , );

SELECT
albums.album_title,
albums.year,
albums.artist,
albums.position,
songs.title
FROM albums
INNER JOIN songs
ON albums.artist = songs.artist
WHERE albums.artist = '';