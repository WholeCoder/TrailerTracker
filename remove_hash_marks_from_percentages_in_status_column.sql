SELECT T.STATUS1, TEXTCAT('10%',SUBSTRING(T.status1 from 5))
FROM "trailers" t
WHERE t.status1 LIKE '10%'

SELECT T.status1
  from "trailers" t
order by t.status1

select distinct(t.status1)
  from trailers t
group by t.status1






update "trailers" t
  set status1 =  TEXTCAT('10%',SUBSTRING(T.status1 from 5))
where status1 LIKE '10%'

update "trailers" t
  set status1 =  TEXTCAT('25%',SUBSTRING(T.status1 from 5))
where status1 LIKE '25%'

update "trailers" t
  set status1 =  TEXTCAT('50%',SUBSTRING(T.status1 from 5))
where status1 LIKE '50%'

update "trailers" t
  set status1 =  TEXTCAT('75%',SUBSTRING(T.status1 from 5))
where status1 LIKE '75%'

update "trailers" t
  set status1 =  TEXTCAT('90%',SUBSTRING(T.status1 from 5))
where status1 LIKE '90%'


update "trailers" t
  set status1 =  TEXTCAT('100%',SUBSTRING(T.status1 from 6)) -- verifiy this 6 before executing!!!!!!!!!!!!!!!!!!!!!!!!!!
where status1 LIKE '100%'

