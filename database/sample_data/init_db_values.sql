insert into state_table(state_name)
values
	('North Sumatra'),
	('West Sumatra'),
	('Riau'),
	('Jambi'),
	('South Sumatra'),
	('Bengkulu'),
	('Lampung'),
	('Bangka-Belitung Islands'),
	('Riau Islands'),
	('Jakarta'),
	('West Java'),
	('Central Java'),
	('Yogyakarta'),
	('East Java'),
	('Banten'),
	('Bali'),
	('West Nusa Tenggara'),
	('East Nusa Tenggara'),
	('West Kalimantan'),
	('South Kalimantan'),
	('East Kalimantan'),
	('North Kalimantan'),
	('North Sulawesi'),
	('Central Sulawesi'),
	('South Sulawesi'),
	('Southeast Sulawesi'),
	('Gorontalo'),
	('West Sulawesi'),
	('Maluku'),
	('North Maluku'),
	('West Papua'),
	('Southwest Papua'),
	('Papua'),
	('South Papua'),
	('Central Papua'),
	('Highland Papua');

insert into city_table(city_name, state_id)
values
	('Jakarta', 10),
	('Yogyakarta', 13),
	('Denpasar', 16),
	('Solo', 12),
	('Semarang', 12),
	('Klaten', 12),
	('Pontianak', 19),
	('Samarinda', 21),
	('Kupang', 18),
	('Medan', 1),
	('Padang', 2),
	('Palembang', 5),
	('Surabaya', 14),
	('Manado', 23),
	('Manokwari', 31),
	('Bandung', 11),
	('Mamuju', 28),
	('Sofifi', 30),
	('Makassar', 25);

insert into venue_table(venue_name,max_capacity,venue_address,city_id)
values
	('Tri Lomba Juang',null,null,5),
	('Gelora Bung Karno',null,null,8),
	('Monas',null,null,8),
	('SMA Kolese Loyola',null,'Jl. Karanganyar 37',5),
	('Kuta beach',null,null,14);

insert into event_classification_table(event_classification_name)
values
	('sports'),
	('music'),
	('show');

insert into event_type_table(event_classification_id, event_type_name)
values
	(1,'basketball'),
	(2,'music'),
	(3,'dance'),
	(1,'swim'),
	(1,'soccer'),
	(1,'football'),
	(1,'esport'),
	(1,'cricket'),
	(2,'Jazz'),
	(2,'Rock'),
	(2,'Pop');

insert into event_league_table(event_type_id,event_league_name)
values
	(1,'Basketball_none'),
	(2,'Singing_none'),
	(3,'Dancing_none'),
	(4,'Swim_none'),
	(5,'Soccer_none'),
	(6,'Football_none'),
	(7,'Esport_none'),
	(8,'Cricket_none'),
	(5,'Premier'),
	(5,'FIFA world cup'),
	(1,'NBA'),
	(1,'WNBA'),
	(4,'Bundesliga'),
	(6,'NFL'),
	(6,'AFL'),
	(5,'EURO Cup'),
	(7,'TI');

insert into event_table(event_league_id,event_name,event_date,event_description,event_popularity,max_capacity,venue_id)
values
	(11,'Chicago Bulls vs GSW',to_date('05-10-2001','MM-DD-YYYY'),'random',0,100,2),
	(16,'Croatia Vs Italy',to_date('01-12-2000','MM-DD-YYYY'),'random',0,200,2),
	(4,'Popda berenang Jateng',to_date('03-31-2000','MM-DD-YYYY'),'asdfasdfa',0,300,5),
	(5,'Classmeeting SMA',to_date('05-10-2001','MM-DD-YYYY'),'adsfafds',0,400,4),
	(17,'Secret V Navi',to_date('01-12-2000','MM-DD-YYYY'),'fasdf',0,500,2),
	(2,'Mawang on the road',to_date('10-10-2002','MM-DD-YYYY'),'ds',0,100,5),
	(2,'Ignatius Tour',to_date('10-08-2003','MM-DD-YYYY'),null,0,50,1);

insert into performer_table(performer_name)
values
	('Mawang'),
	('Ignasius Ali'),
	('Scarlett Johansson'),
	('Coldplay'),
	('Team Secret'),
	('Team Navi');

insert into performer_event_relation(performer_id,event_id)
values
	(1,6),
	(2,7),
	(5,5),
	(6,5);

