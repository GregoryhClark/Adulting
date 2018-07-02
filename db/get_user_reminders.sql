select user_id, reminder_template, first_instance_date, complete_by_date, frequencies.frequency, title, alert_date, completed from reminder_instances 
JOIN reminder_templates on (reminder_instances.reminder_template = reminder_templates.id)
JOIN frequencies on (reminder_templates.frequency = frequencies.id)
where user_id = $1 AND reminder_instances.is_deleted = false AND reminder_templates.is_deleted = false
order by first_instance_date;