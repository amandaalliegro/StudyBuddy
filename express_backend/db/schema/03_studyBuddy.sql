DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS users_interests CASCADE;
DROP TABLE IF EXISTS groups_of_study CASCADE;
DROP TABLE IF EXISTS room_chat CASCADE;
DROP TABLE IF EXISTS chat CASCADE;



CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    student BOOLEAN DEFAULT TRUE,
    mentor BOOLEAN DEFAULT FALSE,
    city VARCHAR(255),
    preferred_language VARCHAR(255)
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
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE,
  mentor BOOLEAN DEFAULT FALSE,
  open BOOLEAN DEFAULT FALSE,
  n_participants INTEGER NOT NULL MAX 10
);

CREATE TABLE room_chat(
  id SERIAL PRIMARY KEY,
  open BOOLEAN DEFAULT FALSE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  group_of_study_id INTEGER REFERENCES groups_of_study(id) ON DELETE CASCADE,
  messages VARCHAR(255)
);

CREATE TABLE chat(
  participant_1 INTEGER REFERENCES users(id) ON DELETE CASCADE,
  participant_2 INTEGER REFERENCES users(id) ON DELETE CASCADE,
  messages VARCHAR (255)   
)
