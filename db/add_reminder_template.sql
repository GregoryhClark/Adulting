insert into reminder_templates (created_by, title, frequency)
values ($1, $2, (select id from frequencies
where frequency = $3))