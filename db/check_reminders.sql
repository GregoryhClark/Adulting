

-- select reminder_instances.id, user_id, reminder_template, start_date, start_hour, start_min, end_date, end_hour, end_min, reminder_instances.is_deleted as reminder_is_deleted, email, mobile_phone, text_notify, email_notify, in_app_notify, users.is_deleted as user_is_deleted, type, user_name, first_name, last_name, title, frequency from reminder_instances 
-- select * from reminder_instances
-- join users on users.id = reminder_instances.user_id
-- join reminder_templates on reminder_templates.id = reminder_instances.reminder_template
-- where start_date = $1 AND start_hour = $2 AND start_min = $3;

select reminder_instances.id as id, user_id, reminder_template, alert_date, start_date, email, mobile_phone, text_notify, email_notify, in_app_notify, type, user_name, first_name, last_name, title, frequency from reminder_instances
join users on users.id = reminder_instances.user_id
join reminder_templates on reminder_templates.id = reminder_instances.reminder_template
where alerted = false AND alert_date <= current_date AND reminder_instances.is_deleted = false and users.is_deleted = false; 