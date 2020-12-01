INSERT INTO users(full_name, password, student, mentor, location, language, gender, email, silent_buddy, description, subject)
VALUES 
('Joe Levesque', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, FALSE, 'edmonton', 'english', 'male', 'socialconsequences@gmail.com', TRUE, 'i love to study webDevelpment', 'web Development'),
('Affaf Rai', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'affaf-rai@hotmail.com', FALSE, 'optimistic about getting my chimistry project done', 'Chemistry'),
('Amanda Arnaut', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'amanda.m.arnaut@gmail.com', FALSE, 'looking for people to study with me 3 hours a week', 'science');

-- INSERT INTO interests(id, name)
-- VALUES
-- (01,"General"),
-- (02, "Science"),
-- (03, "History"),
-- (04, "Philosophy"),
-- (05, "Math"),
-- (06, "Phisyc"),
-- (07, "Design"),
-- (08, "Code"),
-- (10, "Chemistry"),
-- (11, "Photography"),
-- (12, "Writing"),
-- (13, "Cooking");

-- INSERT INTO users_intests (user_id, interest_id)
-- VALUES
-- (3, 01);


-- INSERT INTO groups_of_study(user_id, interest_id, mentor, new, n_participants)
-- VALUES
-- ([03,01,02], 08, FALSE, FALSE, 5);
