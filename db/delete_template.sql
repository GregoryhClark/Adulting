update reminder_templates
set is_deleted = true 
where id = $1;
