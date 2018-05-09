select user_id, reminder_template, start_date, start_hour, start_min, end_date, end_hour, end_min, frequencies.frequency, title from reminder_instances 
JOIN reminder_templates on (reminder_instances.reminder_template = reminder_templates.id)
JOIN frequencies on (reminder_templates.frequency = frequencies.id)
where user_id = $1