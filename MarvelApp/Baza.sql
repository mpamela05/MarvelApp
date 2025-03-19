
select name, collation_name from sys.databases;
go
alter database db_ab6852_marvelapp set single_user with rollback immediate;
go
alter database db_ab6852_marvelapp collate Croatian_CI_AS;
go
alter database db_ab6852_marvelapp set multi_user;
go
select name, collation_name from sys.databases;
go








create table Identiteti (
id int not null primary key identity(1,1),
ime varchar(50) not null,
prezime varchar(50) null,
godine int null,
god_rodjenja int null,
god_smrti int null
);

create table Timovi (
Id int not null primary key identity(1,1),
naziv varchar(50) not null,
planet varchar(50) not null
);

create table Heroji (
id int not null primary key identity(1,1),
heroj_ime varchar (50) not null,
lokacija varchar(50) not null,
moc varchar (250) not null,
osobnost varchar(250) not null,
identitet int references Identiteti(id),
tim int references Tim(id)  
);

insert into Identiteti
values('Peter','Parker', 23, 2001, null), 
('Tony', 'Stark', 50, 1970, 2023), 
('Clint', 'Barton', 50, 1970,null), 
('Thor', 'Odinson', 1052, 0965, null), 
('Natalia', 'Romanoff', 39, 1984, 2023),
(' Robert Bruce', 'Banner', 55, 1969, null), 
('Vision', 'null', 3, 2015, 2018), 
('Nicholas Joseph', 'Fury', 74, 1950,null), 
('89P13', null, 5, null, null), 
('Peter', 'Quill', 44, 1980, null),
('Groot', null, 10, 2014, null), 
('Drax', null, null, null, null), 
('Gamora', null, null, null, 2018), 
('Nebula', null, null, null, null), 
('Mantis', null, null, null, null);
select * from Identiteti

insert into Timovi (naziv, planet)
values ('Avengers', 'Zemlja'), ('Guardians of the Galaxy','Offworld'), ('S.H.I.E.L.D', 'Zemlja');
select * from Timovi

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values ('Spider Man','New York','nadljudska snaga, izdržljivost, brzina, regeneracija, mogu?nost ispaljivanja paukovih mreža, penjanje po raznim površinama', 'hrabar,brizan,lojalan,drag', 1, 1);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values ('Iron Man', 'New York', 'mocno oklopno odijelo, projektili, mogucnost letenja', 'hrabar, inteligentan, ponosan, ekscentirican', 2, 1);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Hawkeye', 'New York', 'Ekspert streli?arstvo','Strpljiv, takti?ar',  3, 3);

 insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Thor', 'Asgard','Bog groma', 'Plemenit, mo?an', 4, 1);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Hulk', 'New York', 'Nevjerojatna snaga','Impulzivna, snažna', 5, 1);

 insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Vision', 'Sokovia','Superinteligencija, laserski zraci', 'Mirna, logi?na', 6, 1);

 insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Natasha Romanoff', 'Rusija', 'Vješte borila?ke vještine, špijunske vještine', 'Inteligentna, strateginja',  7, 1);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values ('Nick Fury', 'New York','Vješt strateški um, vo?stvo', 'Ozbiljan, iskusan', 8, 3);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Rocket', 'Planet X', 'Genijalac, majstor oružja', 'Sarkasti?an, lojalan', 9, 2);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Star-Lord','Zemlja','Vo?a, vješt pilot',  'Humoristi?an, avanturist', 10, 2);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Groot', 'Planet X', 'Super snaga, regeneracija', 'Jednostavan, prijateljski',  11, 2);

insert into  Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Drax Razara?', 'Planet X','Super snaga, neuništivost', 'Naivan, osvetoljubiv', 12, 2);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values('Gamora', 'Zeleni planet', 'Vješte borila?ke vještine, atleti?ar','Hladna, odlu?na', 13, 2);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values ('Nebula', 'Titan', 'Kiberneti?ka nadogradnja, vještina borbe','Okrutna, osvetoljubiva',14, 2);

insert into Heroji (heroj_ime, lokacija, moc, osobnost, identitet, tim)
values ('Mantis', 'Cerberus','Empatija, borila?ke vještine', 'Naivna, empati?na', 15, 2);
