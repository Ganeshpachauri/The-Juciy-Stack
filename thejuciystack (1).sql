-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 06, 2023 at 03:50 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `thejuciystack`
--

-- --------------------------------------------------------

--
-- Table structure for table `addtocart`
--

CREATE TABLE IF NOT EXISTS `addtocart` (
  `food_id` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `food_name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addtocart`
--

INSERT INTO `addtocart` (`food_id`, `user_email`, `food_name`, `price`, `category`, `quantity`, `order_date`) VALUES
(2, 'nit@yahoo.com', 'MEXICAN CHIPTOLE BURGER', '299.00', 'Burger', 1, '2023-10-06'),
(1, 'nit@yahoo.com', 'TJS ALOO TIKKI BURGER', '99.00', 'Burger', 1, '2023-10-06'),
(3, 'nit@yahoo.com', 'CLASSIC VEG BURGER', '199.00', 'Burger', 2, '2023-10-06'),
(1, 'ganeshpachauri26@gmail.com', 'TJS ALOO TIKKI BURGER', '99.00', 'Burger', 2, '2023-10-06');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `name` varchar(40) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pwd` varchar(80) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`name`, `email`, `pwd`) VALUES
('Sakshi', 'sak@gmail.com', 'admin12@');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `Email` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`Email`, `Name`, `Password`) VALUES
('ganeshpachauri26@gmail.com', 'Ganesh Pachauri', 'admin12@'),
('nit@yahoo.com', 'Nitin', 'flower12@A'),
('sakshisharma240999@gmail.com', 'SAKSHI SHARMA', 'Sakshi1234@'),
('kshanky700@gmail.com', 'Ghanshyam Khandelwal', 'Shyam1234@'),
('lucky@gamil.com', 'Lucky', 'Lucky1234@');
