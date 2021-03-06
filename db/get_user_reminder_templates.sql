select reminder_templates.id, created_by, frequencies.frequency, title, is_deleted, complete_by_date, first_instance_date from reminder_templates
JOIN frequencies on (reminder_templates.frequency = frequencies.id)
where created_by = $1 AND is_deleted = false
order by first_instance_date;