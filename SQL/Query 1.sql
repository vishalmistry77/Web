CREATE DATABASE instagram;

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50)  UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 13),
    PRIMARY KEY (id)
);

INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@gmail.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve234@gmail.com", 500, 606),
(6, 16, "farah", "farah55@gmail.com", 10056, 5000);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);

SELECT * FROM user;
SELECT * FROM post;

SELECT name, email, followers
FROM user
ORDER BY followers DESC;

SELECT min(following)
FROM user;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) < 300
ORDER BY age DESC;

UPDATE user
SET followers = 300
WHERE age = 16; 

DELETE FROM user
WHERE age = 17;

ALTER TABLE user
ADD column city VARCHAR(20) DEFAULT "Mumbai";

ALTER TABLE user
DROP column age;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM user;

SET SQL_SAFE_UPDATES = 0;