CREATE SCHEMA IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE employee(
employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
phone VARCHAR(15) NOT NULL,
creation_date TIMESTAMP
);

CREATE TABLE sector(
sector_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
sector_name VARCHAR(50) NOT NULL
);

CREATE TABLE employee_sector(
employee_id INT NOT NULL,
sector_id INT NOT NULL,
PRIMARY KEY (employee_id, sector_id),
FOREIGN KEY (employee_id) REFERENCES employee (employee_id),
FOREIGN KEY (sector_id) REFERENCES sector (sector_id)
);

INSERT INTO sector (sector_name)
VALUES
('Administração'),
('Operacional'),
('Estratégico'),
('Marketing'),
('Vendas');

INSERT INTO employee (employee_id, first_name, last_name, email, phone)
VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO employee_sector (employee_id, sector_id)
VALUES
(12, 1),
(13, 2),
(14, 3),
(15, 4),
(12, 5),
(14, 5);