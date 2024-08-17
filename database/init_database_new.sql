--ONLY RUN CREATE DATABASE ONCE
create database sead_tix;
--------------------------------------------------------------------------------------------------------------------------------

drop table performer_event_relation;
drop table performer_table;
drop table ticket_table;
drop table ticket_price;
drop table customer_table;
drop table all_event_table;
drop table event_table;
drop table venue_table;
drop table city_table;
drop table state_table;
drop table event_league_table;
drop table event_type_table;
drop table event_classification_table;


create table state_table(
    state_id    serial          primary key,
    state_name  varchar(255)    not null
);

create table city_table(
    city_id     serial        primary key,
    city_name   varchar(255)  not null,
    state_id    int           not null
);

alter table city_table
    add constraint fk_city_state foreign key (state_id)
        references state_table (state_id);

create table venue_table(
    venue_id        serial          primary key,
    venue_name      varchar(255)    not null,
    max_capacity    int,
    venue_address   varchar(255),
    city_id         int             not null
);

alter table venue_table
    add constraint fk_venue_city foreign key (city_id)
        references city_table (city_id);

create table event_classification_table(
    event_classification_id     serial          primary key,
    event_classification_name   varchar(255)    not null
);

create table event_type_table(
    event_type_id               serial          primary key,
    event_classification_id     int,
    event_type_name             varchar(255)    not null
);

alter table event_type_table
    add constraint fk_type_classification foreign key (event_classification_id)
        references event_classification_table (event_classification_id);

create table event_league_table(
    event_league_id     serial          primary key,
    event_type_id       int,
    event_league_name   varchar(255)    not null
);

alter table event_league_table
    add constraint fk_league_type foreign key (event_type_id)
        references event_type_table (event_type_id);

create table performer_table(
    performer_id    int             primary key,
    performer_name  varchar(255)    not null
);

create table event_table(
    event_id            serial          primary key,
    event_league_id     int,
    event_name          varchar(255)    not null,
    event_date          date            not null,
    event_description   text,
    event_popularity    int,
    max_capacity        int             not null,
    venue_id            int
);

alter table event_table
    add constraint fk_event_table_venue foreign key (venue_id)
        references venue_table (venue_id);

alter table event_table
    add constraint fk_specified_event_league foreign key (event_league_id)
        references event_league_table (event_league_id);


create table performer_event_relation(
    performer_id        int             not null,
    event_id            int             not null,
    primary key (performer_id, event_id)
);

alter table performer_event_relation
    add constraint many_to_many_relation_to_performer foreign key (performer_id)
        references performer_table (performer_id);

alter table performer_event_relation
    add constraint many_to_many_relation_to_event foreign key (event_id)
        references event_table (event_id);

create table customer_table(
    customer_id     serial          primary key,
    first_name      varchar(255),
    last_name       varchar(255)    not null,
    date_of_birth   date            not null
);

create table ticket_table(
    ticket_id           serial          primary key,
    ticket_type         varchar(255),
    event_id            int             not null,
    customer_id         int,
    ticket_status       int             not null
);

alter table ticket_table
    add constraint fk_event_ticket foreign key (event_id)
        references event_table (event_id);

alter table ticket_table
    add constraint fk_customer_ticket foreign key (customer_id)
        references customer_table (customer_id);

create table ticket_price(
    event_id        int,
    ticket_type     varchar(255),
    ticket_price    decimal(10, 2),
    primary key (event_id, ticket_type)
);

alter table ticket_table
    add constraint fk_ck_price_ticket_table foreign key (event_id, ticket_type)
        references ticket_price (event_id, ticket_type);


delete from ticket_table;
delete from ticket_price;
delete from customer_table;
delete from performer_event_relation;
delete from performer_table;
delete from event_table;
delete from event_league_table;
delete from event_type_table;
delete from event_classification_table;
delete from venue_table;
delete from city_table;
delete from state_table;

\copy state_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/states_table.csv' delimiter ',' csv header;
\copy city_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/city_table.csv' delimiter ',' csv header;
\copy venue_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/venue_table.csv' delimiter ',' csv header;
\copy event_classification_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/event_classification.csv' delimiter ',' csv header;
\copy event_type_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/event_type.csv' delimiter ',' csv header;
\copy event_league_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/event_league.csv' delimiter ',' csv header;
\copy event_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/event_table.csv' delimiter ',' csv header;
\copy performer_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/performer_table.csv' delimiter ',' csv header;
\copy performer_event_relation from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/performer_event_relation.csv' delimiter ',' csv header;
\copy customer_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/customer.csv' delimiter ',' csv header;
\copy ticket_price from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/ticket_price.csv' delimiter ',' csv header;
\copy ticket_table from 'C:/Users/rahar/Documents/Assignments/Tutorial/Node/Ticket/database/sample_data/ticket.csv' delimiter ',' csv header;



--Test commands
--1. Events that happen in Surabaya
select et.event_id, et.event_name, vt.venue_id, vt.city_id, ct.city_name
from event_table et 
left join venue_table vt
    on vt.venue_id = et.venue_id
left join city_table ct 
    on ct.city_id = vt.city_id
where ct.city_name = 'Jakarta';

select * from all_event_table ae
left join event_table se
on ae.event_id = se.event_id 
    and ae.event_league_id = se.event_league_id;