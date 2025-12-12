CREATE DATABASE project;
USE project;
CREATE TABLE users(
    email VARCHAR(30) UNIQUE,
    password VARCHAR(20),
    role ENUM('admin','student')
);
CREATE TABLE courses(
    course_id INT PRIMARY KEY, 
    course_name VARCHAR(20),
    description VARCHAR(50),
    fees INT,
    start_date DATE,
    end_date DATE,
    video_expire_days INT
);
CREATE TABLE student(
    reg_no INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(30),
    course_id INT,
    mobile_no VARCHAR(50),
    profile_pic BLOB,
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
CREATE TABLE videos(
	video_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    title VARCHAR(30),
    description VARCHAR(50),
    youtube_url VARCHAR(50),
    added_at DATE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
INSERT INTO users (email, password, role) VALUES
('alice@example.com', 'alice123', 'student'),
('bob@example.com', 'bob123', 'student'),
('admin@example.com', 'admin123', 'admin');

INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expire_days) VALUES
(101, 'MERN', 'Learn MERN from scratch', 5000, '2025-12-15', '2026-03-15', 90),
(102, 'Android', 'Learn Android from scratch', 4000, '2025-12-20', '2026-03-20', 90),
(103, 'Python', 'Learn Python from scratch', 6000, '2026-01-01', '2026-04-01', 120);

INSERT INTO student (name, email, course_id, mobile_no, profile_pic) VALUES
('Alice', 'alice@example.com', 101, 9876543210, NULL),
('Bob', 'bob@example.com', 102, 9123456780, NULL);

INSERT INTO videos (course_id, title, description, youtube_url, added_at) VALUES
(101, 'MERN', 'Introduction to MERN', 'https://youtu.be/java1', '2025-12-16'),
(101, 'AI', 'Introduction to AI', 'https://youtu.be/java2', '2025-12-17'),
(102, 'Android', 'Introduction to Android', 'https://youtu.be/python1', '2025-12-21'),
(103, 'Python', 'Introduction to Python', 'https://youtu.be/html1', '2026-01-02');

SELECT * FROM users;
SELECT * FROM courses;
SELECT * FROM student;
SELECT * FROM videos;

SELECT s.reg_no ,s.name,s.email,s.mobile_no,c.course_id,c.course_name  FROM student as s
JOIN courses as c
ON s.course_id=c.course_id;

SELECT s.name,s.email,s.mobile_no,c.course_name,c.description,c.fees,c.start_date,c.end_date,video_expire_days FROM student as s
JOIN courses as c
ON s.course_id=c.course_id
WHERE s.email= 'alice@example.com';


SELECT c.course_id, c.course_name, 
       c.start_date, c.end_date, c.video_expire_days,
       v.video_id, v.title, v.added_at
FROM student s
JOIN courses c
  ON s.course_id = c.course_id
JOIN videos v
  ON v.course_id = c.course_id
WHERE s.email = 'ENTER_EMAIL_HERE'
  AND DATE_ADD(v.added_at, INTERVAL c.video_expire_days DAY) > CURDATE();
