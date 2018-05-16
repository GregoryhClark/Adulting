update users 
set address_country = (select id from countries where country = $1) where id = $2;