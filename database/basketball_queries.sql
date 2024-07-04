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
    on elt.event_type_id = ett.event_type_id
where ett.event_type_name = 'basketball';

--specific league
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
    on elt.event_type_id = ett.event_type_id
where ett.event_type_name = 'basketball'
    and elt.event_league_name = '';