-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.7.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for kcdb
CREATE DATABASE IF NOT EXISTS `kcdb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `kcdb`;

-- Dumping structure for table kcdb.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` varchar(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='students table';

-- Dumping data for table kcdb.students: ~15 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `user_id`, `name`, `group`, `createdAt`, `updatedAt`) VALUES
	('12334567', 'kctest00277', 'Tom Doe', 'Default group', '2022-03-20 15:27:32', '2022-03-20 15:27:32'),
	('12345789', 'kctest00579', 'Anna Doe', 'Default group', '2022-03-20 15:26:37', '2022-03-20 15:26:37'),
	('12357389', 'kctest00357', 'Ann Santini', 'Default group', '2022-03-20 17:09:41', '2022-03-20 17:09:41'),
	('12357759', 'kctest00377', 'Tom Santini', 'Default group', '2022-03-20 17:08:36', '2022-03-20 17:08:36'),
	('12357799', 'kctest00577', 'Jamie Cruz', 'Default group', '2022-03-20 17:07:59', '2022-03-20 17:07:59'),
	('12357984', 'kctest00208', 'David Smith', 'Default group', '2022-03-20 16:57:38', '2022-03-20 16:57:38'),
	('12357985', 'kctest00228', 'Terry Cruz', 'Default group', '2022-03-20 16:58:19', '2022-03-20 16:58:19'),
	('12357987', 'kctest0218', 'George Quebedo', 'Default group', '2022-03-20 16:58:55', '2022-03-20 16:58:55'),
	('12357989', 'kctest00202', 'Bernardo Santini', 'Default group', '2022-03-20 16:59:55', '2022-03-20 16:59:55'),
	('12357990', 'kctest00127', 'Bernardo Cruz', 'Default group', '2022-03-20 17:00:24', '2022-03-20 17:00:24'),
	('12357991', 'kctest00117', 'Nelli Shneider', 'Default group', '2022-03-20 17:01:10', '2022-03-20 17:01:10'),
	('12357993', 'kctest00317', 'Tom Shneider', 'Default group', '2022-03-20 17:01:28', '2022-03-20 17:01:28'),
	('12357995', 'kctest00517', 'Den Smith', 'Default group', '2022-03-20 17:01:49', '2022-03-20 17:01:49'),
	('12357997', 'kctest00537', 'Juli Smith', 'Default group', '2022-03-20 17:02:05', '2022-03-20 17:02:05'),
	('12357999', 'kctest00777', 'Naira Cruz', 'Default group', '2022-03-20 17:07:38', '2022-03-20 17:07:38');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping structure for table kcdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table kcdb.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `token`, `createdAt`, `updatedAt`) VALUES
	(1, 'AnnaSmith', '$2b$10$PW1T8ndbKT9VqA6qvtlXH.0eMfwLQW6Osv6CejMp.YvkggmtMI/7y', NULL, '2022-03-20 21:00:18', '2022-03-20 21:00:18'),
	(3, 'DenSmith', '$2b$10$zOCrgRGZn06HxlQB1G//VOTOM2Tasf8EqBJoaVTl8dOMQhhPfTK46', NULL, '2022-03-20 21:37:29', '2022-03-20 21:37:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
