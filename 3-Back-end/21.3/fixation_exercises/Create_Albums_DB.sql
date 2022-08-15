CREATE SCHEMA IF NOT EXISTS albums;

USE albums;

CREATE TABLE artist(
	artist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE music_genre(
	music_genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE album(
	album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artist_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    music_genre_id INT NOT NULL,
    CONSTRAINT artist_id FOREIGN KEY (artist_id) REFERENCES artist (artist_id),
    CONSTRAINT music_genre_id FOREIGN KEY (music_genre_id) REFERENCES music_genre (music_genre_id)
);

CREATE TABLE song(
	song_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT album_id FOREIGN KEY (album_id) REFERENCES album (album_id)
);