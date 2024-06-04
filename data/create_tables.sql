BEGIN;

DROP TABLE IF EXISTS "name", "adjective", "verb", "complement", "combinaison";

CREATE TABLE IF NOT EXISTS "name" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "adjective" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "verb" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "complement" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "combinaison" (
  "id" INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  "name_id" INT NOT NULL REFERENCES "name"("id"),
  "adjective_id" INT NOT NULL REFERENCES "adjective"("id"),
  "verb_id" INT NOT NULL REFERENCES "verb"("id"),
  "complement_id" INT NOT NULL REFERENCES "complement"("id"),
  "correction" TEXT NOT NULL UNIQUE,
  "rating" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;
