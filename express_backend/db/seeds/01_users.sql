INSERT INTO users(id, full_name, password, student, mentor, location, language, gender, email, silent_buddy)
VALUES 
(1, 'Joe Levesque', 1234, TRUE, FALSE, 'edmonton', 'english', 'male', 'socialconsequences@gmail.com', TRUE),
(2, 'Affaf Rai', 12345, TRUE, TRUE, 'Toronto', 'english', 'female', 'affaf-rai@hotmail.com', FALSE),
(3, 'Amanda Arnaut', 123456, TRUE, TRUE, 'Toronto', 'english', 'female', 'amanda.m.arnaut@gmail.com', FALSE);


    -- id SERIAL PRIMARY KEY NOT NULL,
    -- full_name VARCHAR(255) NOT NULL,
    -- password VARCHAR(255) NOT NULL,
    -- student BOOLEAN DEFAULT TRUE,
    -- mentor BOOLEAN DEFAULT FALSE,
    -- location VARCHAR(255),
    -- language VARCHAR,
    -- gender VARCHAR,
    -- email VARCHAR(255) NOT NULL,
    -- silent_buddy boolean DEFAULT FALSE

