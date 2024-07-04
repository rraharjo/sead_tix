--all event template
select * from all_event_table ae 
left join specified_event_table et
on ae.event_id = et.event_id 
    and ae.event_league_id = et.event_league_id
left join event_league_table elt 
on et.event_league_id = elt.event_league_id
left join event_type_table ett 
on elt.event_type_id = ett.event_type_id;


--specified event template
select 
    et.event_id,
    et.event_name,
    et.event_date,
    et.event_popularity,
    et.max_capacity,
    ett.event_type_name,
    elt.event_league_name
from all_event_table ae 
left join specified_event_table et
    on ae.event_id = et.event_id 
        and ae.event_league_id = et.event_league_id
left join event_league_table elt 
    on et.event_league_id = elt.event_league_id
left join event_type_table ett 
    on elt.event_type_id = ett.event_type_id;
where lower(ett.event_type_name) = 'soccer';

--all basketball
select 
    et.event_id,
    et.event_name,
    et.event_date,
    et.event_popularity,
    et.max_capacity,
    vt.venue_name,
    ett.event_type_name,
    elt.event_league_name
from all_event_table ae 
left join specified_event_table et
    on ae.event_id = et.event_id 
        and ae.event_league_id = et.event_league_id
left join venue_table vt
    on vt.venue_id = et.venue_id
left join event_league_table elt 
    on et.event_league_id = elt.event_league_id
left join event_type_table ett 
    on elt.event_type_id = ett.event_type_id;

insert into event_table (
    event_name, 
    event_date, 
    event_description, 
    max_capacity, 
    venue_id, 
    event_type_id)
    values(
        'basketball',
        to_date('01/01/2000', 'MM/dd/yyyy'),
        'sample',
        1000,
        8,
        1
    );

update event_table
    set 
        event_name =
            case 
                when 'asd' is null then event_name
                else 'new Name'
            end
    where event_id = 8;

ALTER TABLE event_table ADD COLUMN event_id SERIAL PRIMARY KEY;
