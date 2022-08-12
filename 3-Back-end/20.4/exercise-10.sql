DELETE FROM BoxOffice
WHERE movie_id IN(SELECT id FROM Movies WHERE length_minutes < 100);

DELETE FROM Movies
WHERE length_minutes < 100;