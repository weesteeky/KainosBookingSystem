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
  Owner varchar(100) not null,
  TargetAudience varchar(200) not null,
  MaxAttendees int unsigned not null
);

Create Table Employee (
  EmployeeID int primary key Auto_increment,
  Name varchar(50) not null,
  Email varchar(50) not null
);
ALTER TABLE Employee ADD CONSTRAINT Employee_Email_chk 
CHECK (REGEXP_LIKE(Email,'^[a-z1-9]+@kainos.com$'));

Create Table Employee_Course (
  EmployeeID int(11),
  CourseID int(11),
  primary key (EmployeeID, CourseID),
  foreign key(EmployeeID) references Employee(EmployeeID),
  foreign key(CourseID) references Course(CourseID)
); 

insert into Course(Title, Date, Location, Description, Owner, TargetAudience, MaxAttendees) 
Values ('Java Fundamentals', '01-02-19', 'Belfast', 'Conference to help beginners learn Java', 'Deborah Sanderson', 
'Beginner software developers', 100);
insert into Course(Title, Date, Location, Description, Owner, TargetAudience, MaxAttendees) 
Values ('Advanced ML', '05-02-19', 'Derry', 'In depth machine learning workshop', 'Austin Tanney', 
'Senior Software Engineers', 20);

insert into Employee(Name, Email) 
Values ('Richard Marshall', 'richards@kainos.com');
insert into Employee(Name, Email) 
Values ('Erin Fisher', 'efisher@kainos.com');
insert into Employee(Name, Email) 
Values ('Brian Sunny', 'brian@kainos.com');
insert into Employee(Name, Email) 
Values ('Medbh O\'Callaghan', 'medbh1@kainos.com');
insert into Employee(Name, Email) 
Values ('George Martin', 'george@kainos.com');

insert into Employee_Course(EmployeeID, CourseID)
values (1, 1);
insert into Employee_Course(EmployeeID, CourseID)
values (2, 2);
insert into Employee_Course(EmployeeID, CourseID)
values (3, 1);
insert into Employee_Course(EmployeeID, CourseID)
values (4, 2);
insert into Employee_Course(EmployeeID, CourseID)
values (5, 1);

-- User Story 2 --
CREATE VIEW viewCourses AS
SELECT Title, Date, Location, Description
FROM Course;

grant all on BookingSystem.* to empuser2@localhost;