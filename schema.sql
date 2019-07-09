drop database if exists BookingSystem;
create database BookingSystem;

drop user if exists empuser2@localhost;
create user empuser2@localhost identified with mysql_native_password by 'empPwd!';

use BookingSystem;

drop table if exists Course;

Create table Course (
  CourseID int primary key Auto_increment,
  Title varchar(100) not null,
  Date date not null,
  Location enum ('Belfast', 'Derry', 'Dublin', 'London', 'Gdansk', 'Amsterdam', 'Boston',
  'Frankfurt') not null,
  Description varchar(300) not null,
  Owner varchar(100) not null,
  TargetAudience varchar(200) not null,
  MaxAttendees int unsigned not null
);

Create Table Employee (
  EmployeeID int primary key Auto_increment,
  Name varchar(50) not null,
  Email varchar(50) not null
);

Create Table Employee_Course (
  EmployeeID int,
  CourseID int 
); 

insert into Course(Title, Date, Location, Description, Owner, TargetAudience, MaxAttendees) 
Values ('Java Fundamentals', '01-02-19', 'Belfast', 'Conference to help beginners learn Java', 'Deborah Sanderson', 
'Beginner software developers', 100);

-- User Story 2 --
CREATE VIEW viewCourses AS
SELECT Title, Date, Location, Description
FROM Course;

grant all on BookingSystem.* to empuser2@localhost;