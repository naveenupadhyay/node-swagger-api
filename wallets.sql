DROP DATABASE IF EXISTS wallets;
CREATE DATABASE wallets;

\c wallets;

CREATE TABLE wallets (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR,
  amount INTEGER
);

INSERT INTO wallets ( name, description, amount)
  VALUES ('Naveen', 'wallet creation for payments bank', 3000);
