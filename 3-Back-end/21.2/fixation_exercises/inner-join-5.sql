SELECT
	CONCAT(c.first_name, ' ', c.last_name) AS name,
    COUNT(a.address)
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.active IS TRUE
GROUP BY name, a.address
ORDER BY name DESC;