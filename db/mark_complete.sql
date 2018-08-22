update reminder_instances
set completed = true 
where id = $1;

update reminder_instances
set alerted = true 
where id = $1;
