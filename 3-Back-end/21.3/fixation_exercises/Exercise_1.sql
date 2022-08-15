CREATE SCHEMA IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animal(
animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
species VARCHAR(50) NOT NULL,
gender VARCHAR(10) NOT NULL,
age INT NOT NULL,
locatiom VARCHAR(50) NOT NULL
);

CREATE TABLE manager(
manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL
);

CREATE TABLE caretaker(
caretaker_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
manager_id INT NOT NULL,
FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
);

CREATE TABLE animal_caretaker(
caretaker_id INT NOT NULL,
animal_id INT NOT NULL,
PRIMARY KEY (caretaker_id, animal_id),
FOREIGN KEY (caretaker_id) REFERENCES caretaker (caretaker_id),
FOREIGN KEY (animal_id) REFERENCES animal (animal_id)
);