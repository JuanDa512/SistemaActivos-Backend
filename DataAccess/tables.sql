CREATE TABLE activos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL, 
    descripcion VARCHAR(400),
    tipo VARCHAR(200),
    valor_compra FLOAT,
    fecha_compra TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN NOT NULL DEFAULT 0,
    responsable VARCHAR(200),
);