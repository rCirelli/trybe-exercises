UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = (SELECT id FROM (SELECT * FROM Movies WHERE title = 'Procurando Nemo') AS sub);