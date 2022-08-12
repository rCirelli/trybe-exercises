INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES 
(
	(SELECT id FROM Movies WHERE title LIKE 'monstros sa'),
    8.5,
    300000000,
    250000000
),
(
	(SELECT id FROM Movies WHERE title LIKE 'os incriveis'),
    7.4,
    460000000,
    510000000
),
(
	(SELECT id FROM Movies WHERE title LIKE 'wall-e'),
    9.9,
    290000000,
    280000000
);