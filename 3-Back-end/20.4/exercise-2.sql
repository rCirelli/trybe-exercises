INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES ((SELECT id FROM Movies WHERE title = 'Procurando Nemo'), 6.8, 450000000, 370000000);
-- SELECT
-- 	*,
--     (SELECT title FROM Movies WHERE id = movie_id) AS movie_title
-- FROM BoxOffice