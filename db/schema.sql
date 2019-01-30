-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS eathome_database;
-- Creates the  database --
CREATE DATABASE eathome_database;
USE eathome_database;


CREATE TABLE restaurant (
    id INT AUTO_INCREMENT NOT NULL,
    owner VARCHAR(255),
    photos VARCHAR(255),
    buisness_name VARCHAR(255),
    description VARCHAR(255),
    address VARCHAR(555),
    license_number VARCHAR(100),
    description VARCHAR(5000),
    reviews VARCHAR(255),
    PRIMARY KEY (id)

);
CREATE TABLE menu(
    id INT AUTO_INCREMENT NOT NULL,
    product VARCHAR(255),
    price int(10),
    ingredients VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE userData (
    id INT AUTO_INCREMENT NOT NULL, 
    userID VARCHAR(255), 
    favorite_restaurants VARCHAR(255),
    reviews VARCHAR(255),
    vendor BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT NOT NULL,
    user_id VARCHAR(255),
    restaurant_id VARCHAR(255),
    review VARCHAR(5000),
    photos VARCHAR(255),
    PRIMARY KEY (id)
);
