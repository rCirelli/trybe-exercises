SELECT
	fa.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) as actor_name,
    f.film_id,
    f.title
FROM sakila.film_actor fa
INNER JOIN sakila.actor a
ON fa.actor_id = a.actor_id
INNER JOIN sakila.film f
ON fa.film_id = f.film_id;