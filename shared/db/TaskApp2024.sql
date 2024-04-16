-- CREACIÓN DE BASE DE DATOS
CREATE DATABASE [TaskApp2024];
GO

-- USO DE BASE DE DATOS
USE [TaskApp2024];
GO

-- /===== CREACIÓN DE TABLAS =====\

-- CREACIÓN DE TABLA ESTADOS DE USUARIO
CREATE TABLE UserStatus (
	id_user_status INT PRIMARY KEY IDENTITY(1,1),
	uuid_user_status VARCHAR(50) NOT NULL,
	user_status_name VARCHAR(50) NOT NULL,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
	updated_at DATETIME NOT NULL DEFAULT GETDATE()
);
GO
INSERT INTO UserStatus (uuid_user_status, user_status_name) VALUES ('a3f04f54-f264-42ef-99b6-07dead57e66d', 'Active');
INSERT INTO UserStatus (uuid_user_status, user_status_name) VALUES ('20f60e3f-4c34-4f5b-88c7-268582149baf', 'Inactive');
GO

-- CREACIÓN DE TABLA USUARIOS
CREATE TABLE Users (
	id_user INT PRIMARY KEY IDENTITY(1,1),
	uuid_user VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(150) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	id_user_status INT NOT NULL DEFAULT 1,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
	updated_at DATETIME NOT NULL DEFAULT GETDATE(),
	FOREIGN KEY (id_user_status) REFERENCES UserStatus (id_user_status)
);
GO

-- CREACIÓN DE TABLA ESTADOS DE TAREA
CREATE TABLE TaskStatus (
	id_task_status INT PRIMARY KEY IDENTITY(1,1),
	uuid_task_status VARCHAR(50) NOT NULL,
	task_status_name VARCHAR(50) NOT NULL,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
	updated_at DATETIME NOT NULL DEFAULT GETDATE()
);
GO
INSERT INTO TaskStatus (uuid_task_status, task_status_name) VALUES ('e8fa0d9d-fbc4-4f5d-a9ff-08ff640e7b5e', 'Pending');
INSERT INTO TaskStatus (uuid_task_status, task_status_name) VALUES ('c3965844-1eb1-4474-8e5d-08b0fc07bcce', 'In process');
INSERT INTO TaskStatus (uuid_task_status, task_status_name) VALUES ('0f8b7eb6-8cfe-427a-bb14-04961cf0db81', 'Done');
GO

-- CREACIÓN DE TABLA ESTADOS DE TAREA
CREATE TABLE Tasks (
	id_task INT PRIMARY KEY IDENTITY(1,1),
	uuid_task VARCHAR(50) NOT NULL,
	title VARCHAR(70) NOT NULL,
	task_description VARCHAR(255) NOT NULL,
	id_user INT NOT NULL,
	id_task_status INT NOT NULL DEFAULT 1,
	created_at DATETIME NOT NULL DEFAULT GETDATE(),
	updated_at DATETIME NOT NULL DEFAULT GETDATE(),
	FOREIGN KEY (id_user) REFERENCES Users (id_user),
	FOREIGN KEY (id_task_status) REFERENCES TaskStatus (id_task_status),
);
GO