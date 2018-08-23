insert into reminder_instances (user_id, reminder_template, alert_date, instance_start_date)
values (
$1,
$2,
(TIMESTAMP WITH TIME ZONE $3 + interval $4),
(TIMESTAMP WITH TIME ZONE $6 + interval $4)
);

update reminder_instances
set alerted = true 
where id = $5;

