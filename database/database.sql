CREATE DATABASE gamesdb;

USE gamesdb;

CREATE TABLE games (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(600),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;

USE gamesdb;

CREATE TABLE movies (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(600),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE movies;