CREATE DATABASE fruits;

CREATE TABLE fruit(
    fruit_id Serial Primary Key,
    fruit_name VARCHAR(20) NOT NULL,
    fruit_type VARCHAR(20) NOT NULL,
    taste_rating VARCHAR(1) NOT NULL
);
