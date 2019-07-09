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
  Location enum ('Belfast', 'Derry', 'Dublin') not null,
  Description varchar(300) not null,
  Owner varchar(100) not null,
  TargetAudience varchar(200) not null
);

insert into Course(Title, Date, Location, Description, Owner, TargetAudience) 
Values ('Java Fundamentals', '01-02-19', 'Belfast', 'Learning the Java basics', 'Deborah', 
'For Beginners');

grant all on BookingSystem.* to empuser2@localhost;