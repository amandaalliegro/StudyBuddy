INSERT INTO users(full_name, password, student, mentor, location, language, gender, email, silent_buddy, description, subject, img)
VALUES 
('Joe Levesque', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, FALSE, 'Edmonton', 'english', 'male', 'socialconsequences@gmail.com', TRUE, 'I love to study webDevelpment', 'web Development','https://ca.slack-edge.com/T2G8TE2E5-U018FKFCM2S-1a6c35b91379-512'),
('Affaf Rai', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'affaf-rai@hotmail.com', FALSE, 'optimistic about getting my chimistry project done', 'Chemistry','https://avatars0.githubusercontent.com/u/67074428?s=400&u=4bd5ad73c1cfae287e0b5bb1b0e8f20fedaf3c0c&v=4'),
('Amanda Arnaut', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'amanda.m.arnaut@gmail.com', FALSE, 'looking for people to study with me 3 hours a week', 'web development', 'https://avatars2.githubusercontent.com/u/68923553?s=460&u=3c5c9c947f2962f7ad13a6f22ad5c63461b93318&v=4'),
('Dominic Tremblay', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'DominicMockEmail@gmail.com', FALSE, 'Web Dev Guru', 'Web Delevopment','https://i2.wp.com/www.primatimes.com/wp-content/uploads/2020/06/myAvatar-2.png?fit=500%2C500&ssl=1'),
('Vasily Klimkin', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'morpheus@gmail.com', FALSE, 'pill? red : blue', 'vagrant VMs','https://i0.wp.com/www.appletips.nl/wp-content/uploads/2020/06/facebook-avatar-icon.png?fit=600%2C600&ssl=1'),
('Francis Bourgouin', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Montreal', 'french', 'male', 'dadJokes@gmail.com', FALSE, 'Always Judging', 'web development', 'https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png'),
('Janelle Stiehl', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'female', 'JanelleMockEmail@gmail.com', FALSE, 'Workplace ring master', 'Management','https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'),
('Marie Lecourt ', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Montreal', 'english', 'female', 'Mad@gmail.com', FALSE, 'Job pathfinder', 'Career Services', 'https://images.radio.com/kyxyfm/Screenshot_20200517-134508_Facebook_0.jpg?width=775&height=&crop=350:360,smart'),
('Paolo Ferrari', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', TRUE, TRUE, 'Toronto', 'english', 'male', 'Ferrari@gmail.com', FALSE, 'looking for people to study with me 3 hours a week', 'science', 'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg');
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