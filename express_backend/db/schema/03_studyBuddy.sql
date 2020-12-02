
-- C R E A T E   T A B L E S 
do $$
BEGIN
RAISE NOTICE 'CREATING TABLES';
END;
$$;

-- CREATE TABLE FOR USERS
DROP TABLE IF EXISTS users CASCADE;
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
    silent_buddy boolean DEFAULT FALSE,
    description VARCHAR(255),
    subject VARCHAR(255)
);

-- CREATE TABLE FOR MANAGING INTERESTS ('Programming')

DROP TABLE IF EXISTS interests CASCADE;
CREATE TABLE interests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- CREATE TABLE TO MANAGE SPECIFIC USER INTERESTS ('interests(0) => 'Programming')

DROP TABLE IF EXISTS users_interests CASCADE;
CREATE TABLE users_interests(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE
);

-- CREATE TABLE STUDY GROUPS TO GROUP USERS BY INTEREST

DROP TABLE IF EXISTS study_groups CASCADE;
CREATE TABLE study_groups(
  id SERIAL PRIMARY KEY,
  mentor BOOLEAN DEFAULT FALSE,
  new BOOLEAN DEFAULT TRUE,
  user_count INTEGER DEFAULT 1
);

-- CREATE TABLE USER GROUPS TO GROUP USERS BY INTEREST

DROP TABLE IF EXISTS user_groups CASCADE;
CREATE TABLE user_groups(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  study_group_id INTEGER REFERENCES study_groups(id)
);

-- CREATE TABLE ROOM CHAT TO HOLD MESSAGES AND USER CHATS

DROP TABLE IF EXISTS room_chat CASCADE;
CREATE TABLE room_chat(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL, 
  new BOOLEAN DEFAULT TRUE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


-- CREATE TABLE MESSAGES TO HOLD ALL MESSAGES KEYED BY USER AND ROOMCHAT

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages(
  id SERIAL PRIMARY KEY,                          -- MESSAGE ID
  roomchat_id INTEGER REFERENCES room_chat(id),   -- ROOMCHAT FK
  user_id INTEGER REFERENCES users(id),           -- USER WHO MADE MSG
  message TEXT NOT NULL,                          -- TEXT
  date DATE DEFAULT NOW()                         -- DTG
);

-- CREATE TABLE FOR PUBLIC CHATS
DROP TABLE IF EXISTS public_board CASCADE;
CREATE TABLE public_board(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  message TEXT
);

-- I N S E R T S
do $$
BEGIN
RAISE NOTICE 'INSERTING VALS';
END;
$$;

-- U S E R S
INSERT INTO users(full_name, password, student, mentor, location, language, gender, email, silent_buddy, description, subject)
VALUES 
('Joe Levesque', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, FALSE, 'Edmonton', 'english', 'male', 'socialconsequences@gmail.com', TRUE, 'I love to study webDevelpment', 'web Development'),
('Affaf Rai', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'affaf-rai@hotmail.com', FALSE, 'optimistic about getting my chimistry project done', 'Chemistry'),
('Dominic Tremblay', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'DominicMockEmail@gmail.com', FALSE, 'Web Dev Guru', 'Web Delevopment'),
('Vasily Klimkin', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'morpheus@gmail.com', FALSE, 'pill? red : blue', 'vagrant VMs'),
('Francis Bourgouin', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Montreal', 'french', 'male', 'dadJokes@gmail.com', FALSE, 'Always Judging', '3D Printing'),
('Janelle Stiehl', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'JanelleMockEmail@gmail.com', FALSE, 'Workplace ring master', 'Management'),
('Marie Lecourt ', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Montreal', 'english', 'female', 'Mad@gmail.com', FALSE, 'Job pathfinder', 'Career Services'),
('Paolo Ferrari', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'Ferrari@gmail.com', FALSE, 'looking for people to study with me 3 hours a week', 'science');

-- I N T E R E S T S  
INSERT INTO interests(id, name) VALUES (1, 'Programming');

-- U S E R   I N T E R E S T S
INSERT INTO users_interests(user_id, interest_id) VALUES (1, 1);

-- G R O U P    O F    S T U D Y  
INSERT INTO study_groups(id, user_count) VALUES (1, 1);

-- R O O M   C H A T S
INSERT INTO room_chat(interest_id, name, user_id) VALUES (1, 'JavaScript', 1);

-- M E S S A G E S
INSERT INTO messages(roomchat_id, user_id, message)
VALUES
-- Preseeded messages
  (1, 1, 'This is a test'),
  (1, 1, 'This is a second message'),
  (1, 2, 'This is a reply from another user');
