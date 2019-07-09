drop database if exists BookingSystem;
create database BookingSystem;

use BookingSystem;

drop table if exists Course;

Create table Course (
  CourseID int primary key Auto_increment,
  Title varchar(100) not null,
  Date date not null,
  Location varchar(50),
  Description varchar(50),
  Owner varchar(50)
);

insert into Course(Title, Date, Location, Description, Owner) 
Values ('Java Fundamentals', '01-02-19', 'Belfast', 'Learning the Java basics', 'Deborah');

grant all on BookingSystem.* to empuser2;