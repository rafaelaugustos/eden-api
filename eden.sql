-- -------------------------------------------------------------
-- TablePlus 3.12.6(366)
--
-- https://tableplus.com/
--
-- Database: eden
-- Generation Time: 2021-04-27 20:11:27.6310
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS events_id_seq;

-- Table Definition
CREATE TABLE "public"."events" (
    "id" int4 NOT NULL DEFAULT nextval('events_id_seq'::regclass),
    "id_user" int8 NOT NULL,
    "id_category" int8 NOT NULL,
    "latitude" text NOT NULL,
    "longitude" text NOT NULL,
    "event" text NOT NULL,
    "description" text,
    "created_at" date NOT NULL DEFAULT now(),
    "event_date" date NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" text NOT NULL,
    "password" text NOT NULL,
    "email" text NOT NULL,
    "phone" text NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."events" ("id", "id_user", "id_category", "latitude", "longitude", "event", "description", "created_at", "event_date") VALUES
(1, 1, 1, '38.736946', '-9.142685', 'Assalto a mão armada', 'Levaram meu celular e minha bolsa.', '2021-04-27', '2021-04-27');

INSERT INTO "public"."users" ("id", "name", "password", "email", "phone") VALUES
(1, 'Rafael Augusto', '$2b$10$53O1QezjJFWe7vDTELvtXe5PBl6yqH9AJFuqomxdVPJuHeDS7tVAO', 'rafaelaugusto.developer@gmail.com', '11938065714');

