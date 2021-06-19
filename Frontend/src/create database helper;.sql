create database helper;

use helper;

CREATE TABLE `tasks` (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(200) NOT NULL,
  `status` varchar(500) DEFAULT NULL,
  `categorie` varchar(100) NOT NULL,
  `frequency` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `price` double DEFAULT NULL,
  `phone` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `owner_id` int NOT NULL,
  `performer_id` int DEFAULT NULL,
  PRIMARY KEY (`task_id`)
);

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `salt` varchar(1000) NOT NULL,
  `hash` varchar(1000) NOT NULL,
  `token` varchar(200) DEFAULT NULL,
  `numberID` varchar(9) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `is_performer` tinyint(1) NOT NULL,
  `languages` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `work_cities` varchar(1000) DEFAULT NULL,
  `price_per_hour` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`)
);