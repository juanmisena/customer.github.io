-- to has database if exists?
DROP DATABASE IF EXISTS `test`;

-- to create a new database
CREATE DATABASE `test`;

-- to use database
USE `test`;

-- has to table if exists?
DROP TABLE IF EXISTS `customer`;
FLUSH TABLES `customer`;

-- creating a new table
CREATE TABLE `customer` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(15) NOT NULL
);

-- to show all tables
SHOW TABLES;

-- to describe table
DESCRIBE `customer`;