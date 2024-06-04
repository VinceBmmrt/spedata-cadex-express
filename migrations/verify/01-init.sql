-- Verify cadex:01-init on pg

BEGIN;

SELECT * FROM "name","adjective","verb","complement","combinaison" WHERE false;


ROLLBACK;
