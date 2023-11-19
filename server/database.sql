CREATE DATABASE todolist;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    todo_title VARCHAR(50),
    todo_description VARCHAR(50),
    todo_is_complete BOOLEAN,
    todo_created_on DATE DEFAULT CURRENT_DATE
);

ALTER TABLE todo ADD COLUMN todo_is_easy_win BOOLEAN;
ALTER TABLE todo ADD COLUMN todo_description VARCHAR(400);
ALTER TABLE todo DROP COLUMN todo_description;
ALTER TABLE todo DROP COLUMN todo_is_easy_win;

INSERT INTO todo (todo_title) VALUES ('Learn PostgreSQL');

SELECT * FROM todo;