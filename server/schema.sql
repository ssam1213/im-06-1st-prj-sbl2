DROP DATABASE IF EXISTS simplyanal;

CREATE DATABASE simplyanal;

USE simplyanal;
        
CREATE TABLE users (
 id INTEGER NOT NULL AUTO_INCREMENT,
 mail VARCHAR(30) NOT NULL,
 password VARCHAR(70) NOT NULL,
 name VARCHAR(10) NOT NULL,
 birthDate DATE NOT NULL,
 joined DATETIME,
 PRIMARY KEY(id)
);

INSERT INTO users  (mail, password, name, birthDate, joined)
VALUES ('WONBOK@naver.com', "asdf", "wonbok", "1987-12-13", now());

SELECT * FROM users