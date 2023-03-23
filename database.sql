-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shoppingCart" (
  "id" serial primary key,
  "name" varchar(80) not null,
  "quantity" decimal not null,
  "unit" varchar(20),
  "purchased" boolean default false
);

INSERT INTO "shoppingCart" ("name", "quantity", "unit")
VALUES ('donuts', 1, 'dozen'),
('bananas', 1.5, 'bunch');