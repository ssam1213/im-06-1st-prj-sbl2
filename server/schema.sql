DROP DATABASE IF EXISTS `simplyAnal`;
CREATE DATABASE `simplyAnal`;
USE `simplyAnal`;

DROP TABLE IF EXISTS `revenue`;
CREATE TABLE `revenue` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
 `pageviews_id` INTEGER NULL DEFAULT NULL,
 `itemName` VARCHAR(10) NOT NULL,
 `price` INTEGER NOT NULL,
 `revenueTime` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `pageviews`;
CREATE TABLE `pageviews` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
 `pageName` VARCHAR(10) NOT NULL,
 `visitors_id` INTEGER NULL DEFAULT NULL,
 `pageTime` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `visitors`;
CREATE TABLE `visitors` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
 `users_id` INTEGER NULL DEFAULT NULL,
 `token` VARCHAR(255) NOT NULL,
 `visitorTime` DATETIME NOT NULL,
 `duration` TIME NULL,
 PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
 `mail` VARCHAR(20) NOT NULL,
 `password` VARCHAR(255) NOT NULL,
 `userName` VARCHAR(10) NOT NULL,
 `birthDate` DATE NOT NULL,
 PRIMARY KEY (`id`)
);

ALTER TABLE `revenue` ADD FOREIGN KEY (pageviews_id) REFERENCES `pageviews` (`id`);
ALTER TABLE `pageviews` ADD FOREIGN KEY (visitors_id) REFERENCES `visitors` (`id`);
ALTER TABLE `visitors` ADD FOREIGN KEY (users_id) REFERENCES `users` (`id`);