-- Laboratorio 5  Uso de Bases de Datos Relacionales SQL


-- Crear tabla Estudiantes
CREATE TABLE Estudiantes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  edad INT,
  ciudad VARCHAR(50)
);

-- Insertar datos en la tabla
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES
  ('Juan', 20, 'Bogotá'),
  ('Ana', 22, 'Medellín'),
  ('Luis', 19, 'Cali');

-- Consultar todos los registros
SELECT * FROM Estudiantes;

-- Filtrar estudiantes por ciudad
SELECT * FROM Estudiantes WHERE ciudad = 'Bogotá';

-- Consultar estudiantes mayores de 20 años
SELECT * FROM Estudiantes WHERE edad > 20;
