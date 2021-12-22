DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar,
  handle varchar,
  avatar varchar,
  email varchar,
  password varchar,
  is_admin boolean DEFAULT FALSE
);











