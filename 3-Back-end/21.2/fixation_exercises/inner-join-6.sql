SELECT
	first_name,
    last_name,
    AVG(amount) as avg_payment
FROM sakila.payment p
INNER JOIN sakila.staff s
ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY p.staff_id;