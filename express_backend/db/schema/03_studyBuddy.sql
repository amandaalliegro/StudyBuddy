DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS users_interests CASCADE;
DROP TABLE IF EXISTS groups_of_study CASCADE;
DROP TABLE IF EXISTS room_chat CASCADE;
DROP TABLE IF EXISTS chat CASCADE;
DROP TABLE IF EXISTS user_groups CASCADE;
DROP TABLE IF EXISTS public_board CASCADE;


-- add community table 


CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    student BOOLEAN DEFAULT TRUE,
    mentor BOOLEAN DEFAULT FALSE,
    location VARCHAR(255),
    language VARCHAR,
    gender VARCHAR,
    email VARCHAR(255) NOT NULL,
    silent_buddy boolean DEFAULT FALSE

);
CREATE TABLE interests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);
CREATE TABLE users_interests(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE
);
CREATE TABLE groups_of_study(
  id SERIAL PRIMARY KEY,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE,
  mentor BOOLEAN DEFAULT FALSE,
  new BOOLEAN DEFAULT FALSE,
  -- how to set max participants?
  n_participants INTEGER NOT NULL 
);
-- join table
CREATE TABLE user_groups(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  group_of_study_id INTEGER REFERENCES groups_of_study(id)
);
-- same as direct message table. then expand to multi user messaging 

CREATE TABLE room_chat(
  id SERIAL PRIMARY KEY,
  new BOOLEAN DEFAULT FALSE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE,
  group_of_study_id INTEGER REFERENCES groups_of_study(id) ON DELETE CASCADE,
  messages VARCHAR(255)
);
CREATE TABLE public_board(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  message VARCHAR(255)
);

