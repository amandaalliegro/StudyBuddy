INSERT INTO users(full_name, password, student, mentor, location, language, gender, email, silent_buddy)
VALUES 
('Joe Levesque', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, FALSE, 'edmonton', 'english', 'male', 'socialconsequences@gmail.com', TRUE),
('Affaf Rai', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'affaf-rai@hotmail.com', FALSE),
('Amanda Arnaut', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'amanda.m.arnaut@gmail.com', FALSE);


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

