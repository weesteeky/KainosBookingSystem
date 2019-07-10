drop database if exists BookingSystem;
create database BookingSystem;

 

drop user if exists empuser2@localhost;
create user empuser2@localhost identified with mysql_native_password by 'empPwd!';

 

use BookingSystem;

 

drop table if exists Course;
drop table if exists Employee;
drop table if exists Employee_Course;

 

Create table Course (
  CourseID int primary key Auto_increment,
  Title varchar(100) not null,
  Date date not null,
  Location enum ('Belfast', 'Derry', 'Dublin', 'London', 'Gdansk', 'Amsterdam', 
  'Boston', 'Frankfurt') not null,
  Description varchar(300) not null,
  TargetAudience varchar(200) not null,
  MaxAttendees smallint unsigned not null
);

 

Create Table Employee_Course (
  CourseID int(11),
  Name varchar(50) not null,
  Email varchar(50) not null,
  primary key (CourseID, Email),
  foreign key(CourseID) references Course(CourseID)
); 
ALTER TABLE Employee_Course ADD CONSTRAINT Employee_Course_Email_chk 
CHECK (REGEXP_LIKE(Email,'^[a-z0-9]+@kainos.com$'));

 

insert into Course(Title, Date, Location, Description, TargetAudience, MaxAttendees) 
Values ('Java Fundamentals', '2019-09-19', 'Belfast', 'Conference to help beginners learn Java', 
'Beginner software developers', 100);
insert into Course(Title, Date, Location, Description, TargetAudience, MaxAttendees) 
Values ('Advanced ML', '2019-10-19', 'Derry', 'In depth machine learning workshop', 
'Senior Software Engineers', 20);

 

insert into Employee_Course(CourseID, Name, Email)
values (1, 'Barry Gyammon', 'barry1@kainos.com');
insert into Employee_Course(CourseID, Name, Email)
values (2, 'Erin Fisher', 'erin@kainos.com');
insert into Employee_Course(CourseID, Name, Email)
values (1, 'Richard Mitchell', 'richard@kainos.com');
insert into Employee_Course(CourseID, Name, Email)
values (2, 'Ciara Dempsey', 'ciaras@kainos.com');
insert into Employee_Course(CourseID, Name, Email)
values (1, 'Ryan Marytn', 'ryans@kainos.com');

 

-- User Story 2 --
CREATE VIEW viewCourses AS
SELECT Title, Date, Location, Description
FROM Course;

 

grant all on BookingSystem.* to empuser2@localhost;
