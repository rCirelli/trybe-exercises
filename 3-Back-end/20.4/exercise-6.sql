DELETE FROM BoxOffice
WHERE movie_id = (SELECT id FROM Movies WHERE title LIKE 'wall-e');

DELETE FROM Movies
WHERE id = (SELECT id FROM (SELECT * FROM Movies WHERE title LIKE 'wall-e') AS sub);