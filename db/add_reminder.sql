-- insert into reminder_templates (created_by, frequency, title, complete_by_date, start_date alert_time)
-- values ($1, $2, (select id from frequencies
-- where frequency = $3))

insert into reminder_templates (created_by, frequency, title, first_instance_date)
values (
    $1,
    (select id from frequencies
where frequency = $2),
$3,
$4
);

insert into reminder_instances (reminder_template, alert_date, instance_start_date)
values(

(select id from reminder_templates
where created_by = $1
order by id desc
limit 1), 
(timestamp with time zone $4 - interval $6' '$5 ),
$4

);
