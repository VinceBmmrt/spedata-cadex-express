-- Revert cadex:01-init from pg

BEGIN;

DROP TABLE "name", "adjective", "verb", "complement", "combinaison";

COMMIT;
