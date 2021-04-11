-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Apr 11, 2021 alle 18:07
-- Versione del server: 10.4.17-MariaDB
-- Versione PHP: 8.0.2


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE SCHEMA IF NOT EXISTS todo_app;
USE todo_app;
 

CREATE TABLE IF NOT EXISTS Todo (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'TODO INTEGER PRIMARY KEY (AI)',
  nome VARCHAR(50) NOT NULL COMMENT 'TODO STRING NAME',
  scadenza TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() COMMENT 'TODO TIMESTAMP EXPIRE',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() COMMENT 'TODO TIMESTAMP CREATION DATE',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP() COMMENT 'TODO TIMESTAMP UPDATE DATE',
  UNIQUE KEY (nome, scadenza)
) ENGINE = InnoDB CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci  ;


OPTIMIZE TABLE Todo;

SHOW CREATE TABLE Todo;
DESCRIBE Todo;