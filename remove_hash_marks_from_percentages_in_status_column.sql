SELECT T.STATUS1, TEXTCAT('10%',SUBSTRING(T.status1 from 5))
FROM "trailers" t
WHERE t.status1 LIKE '10%'

SELECT T.status1
  from "trailers" t
order by t.status1

select distinct(t.status1)
  from trailers t
group by t.status1





-- Update percentages - status1
-- if we clone a db then it may have extra # characters so run this
-- script on that db to get rid of them.

-- 100#% COMPLETE:  RELEASED TO CUSTOMER

UPDATE "trailers" t
SET status1 = TEXTCAT('100% ',SUBSTRING( status1 FROM 6))
WHERE status1 LIKE '100#%'

UPDATE "trailers" t
SET status1 = TEXTCAT('25%  ',SUBSTRING( status1 FROM 7))
WHERE status1 LIKE '25#%'

UPDATE "trailers" t
SET status1 = TEXTCAT('10%  ',SUBSTRING( status1 FROM 7))
WHERE status1 LIKE '10#%'

UPDATE "trailers" t
SET status1 = TEXTCAT('50%  ',SUBSTRING( status1 FROM 7))
WHERE status1 LIKE '50#%'

UPDATE "trailers" t
SET status1 = TEXTCAT('75%  ',SUBSTRING( status1 FROM 7))
WHERE status1 LIKE '75#%'

UPDATE "trailers" t
SET status1 = TEXTCAT('90%  ',SUBSTRING( status1 FROM 7))
WHERE status1 LIKE '90#%'






-- status2
UPDATE "trailers" t
SET status2 = TEXTCAT('100% ',SUBSTRING( status2 FROM 6))
WHERE status2 LIKE '100#%'

UPDATE "trailers" t
SET status2 = TEXTCAT('25%  ',SUBSTRING( status2 FROM 7))
WHERE status2 LIKE '25#%'

UPDATE "trailers" t
SET status2 = TEXTCAT('10%  ',SUBSTRING( status2 FROM 7))
WHERE status2 LIKE '10#%'

UPDATE "trailers" t
SET status2 = TEXTCAT('50%  ',SUBSTRING( status2 FROM 7))
WHERE status2 LIKE '50#%'

UPDATE "trailers" t
SET status2 = TEXTCAT('75%  ',SUBSTRING( status2 FROM 7))
WHERE status2 LIKE '75#%'

UPDATE "trailers" t
SET status2 = TEXTCAT('90%  ',SUBSTRING( status2 FROM 7))
WHERE status2 LIKE '90#%'


--status3

UPDATE "trailers" t
SET status3 = TEXTCAT('100% ',SUBSTRING( status3 FROM 6))
WHERE status3 LIKE '100#%'

UPDATE "trailers" t
SET status3 = TEXTCAT('25%  ',SUBSTRING( status3 FROM 7))
WHERE status3 LIKE '25#%'

UPDATE "trailers" t
SET status3 = TEXTCAT('10%  ',SUBSTRING( status3 FROM 7))
WHERE status3 LIKE '10#%'

UPDATE "trailers" t
SET status3 = TEXTCAT('50%  ',SUBSTRING( status3 FROM 7))
WHERE status3 LIKE '50#%'

UPDATE "trailers" t
SET status3 = TEXTCAT('75%  ',SUBSTRING( status3 FROM 7))
WHERE status3 LIKE '75#%'

UPDATE "trailers" t
SET status3 = TEXTCAT('90%  ',SUBSTRING( status3 FROM 7))
WHERE status3 LIKE '90#%'

