UPDATE BoxOffice
SET rating = 6.0
WHERE (international_sales < 300000000 AND domestic_sales > 200000000);