-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 03:32 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `omnisafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `eventsTypeId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `description`, `status`, `eventsTypeId`) VALUES
(1, 'Mexico vs Brazil', 'Description about the Match', 1, 1),
(2, 'Mexico vs Argentina', 'Description about the Match', 0, 1),
(3, 'Mexico vs Canada', 'Description about the Match', 1, 2),
(4, 'Mexico vs Chile', 'Description about the Match', 0, 2),
(5, 'Argentina vs Brazil', 'Description about the Match', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `events_types`
--

CREATE TABLE `events_types` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events_types`
--

INSERT INTO `events_types` (`id`, `name`) VALUES
(1, 'Football'),
(2, 'Basketball'),
(3, 'VolleyBall');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `surname`, `email`, `password`) VALUES
(1, 'oscar', 'cardoso', 'oscar@cardoso-devstar.com', '$2b$08$jA/N05Wr0Pb6cLcTAqaU7eGUwQD.sSfoQhB8NPZHQb5NATCvKh50.'),
(2, 'test', 'last2', 'test@mail.com', '$2b$08$7d18TY3JVjHtdLH00h3.Eu.E2.Pu9y.aTRTxJ4aR/FLj882cnJ3GO'),
(3, 'test3', 'last3', 'test3@mail.com', '$2b$08$Nyr1KdyG3WrhbHhbBWE2MOGQSd7LNTplqi/BxtZKLr3pCEyr2v4d2'),
(4, 'test4', 'last4', 'test4@mail.com', '$2b$08$nLv6xyGgSqBv2duxD.YlPeOLhh4Cml9HocS5XXhEVZiQ71ILZHvgq'),
(5, 'test5', 'last6', 'test6@gmail.com', '$2b$08$JfhMYHr9.8pW4D76t.tZIefXWhG5rsUbxbU.bRKL9Vk7f5CCEt/EW'),
(6, 'test7', 'last7', 'test7@gmail.com', '$2b$08$YykeBa61xM.Dz5GRFU5RuuDfQoMICvWzhynoYc5mJ69HmRVTZvsD2'),
(7, 'test8', 'last8', 'test8@gmail.com', '$2b$08$wFkH/iyfP359U6CZUlxDN.zgiJCQM.xkoeozCjgJV4sTDmZS68O2O'),
(8, 'test9', 'last9', 'test9@gmail.com', '$2b$08$ByXO4ppZ1kBV6aqgECWSxuwGqNVi8EL4SjfXmif6oj2Drdo1Tp2fe'),
(9, 'first', 'second', 'fisrt@mail.com', '$2b$08$DJbQEWPROss0sLKo8.cStueumucKLUrttJF0X19pvBxGuhihv9s4m');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `eventsTypeId` (`eventsTypeId`);

--
-- Indexes for table `events_types`
--
ALTER TABLE `events_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `events_types`
--
ALTER TABLE `events_types`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`eventsTypeId`) REFERENCES `events_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
