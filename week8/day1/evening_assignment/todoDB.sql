CREATE DATABASE todoList;

CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(45) NOT NULL,
    task_importance VARCHAR(1) NOT NULL,
)