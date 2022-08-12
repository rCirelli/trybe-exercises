UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE id = (SELECT id FROM (SELECT * FROM Movies WHERE title = 'ratatui') AS sub);