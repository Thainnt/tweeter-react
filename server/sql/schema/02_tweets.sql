DROP TABLE IF EXISTS tweets CASCADE;

CREATE TABLE tweets (
  id SERIAL PRIMARY KEY,
  content varchar,
  user_id integer REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamp DEFAULT now()
);