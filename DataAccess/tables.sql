CREATE TABLE activos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_area INTEGER NOT NULL DEFAULT 1,
    id_tipo_activo INTEGER NOT NULL DEFAULT 1,
    id_responsable INTEGER NOT NULL DEFAULT 1,
    nombre VARCHAR(200) NOT NULL, 
    descripcion VARCHAR(400),
    tipo VARCHAR(200),
    valor_compra FLOAT,
    fecha_compra TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN NOT NULL DEFAULT 0,
    FOREIGN KEY (id_area) REFERENCES area(id),
    FOREIGN KEY (id_tipo_activo) REFERENCES tipo_activo(id),
    FOREIGN KEY (id_responsable) REFERENCES responsable(id)
);

CREATE TABLE area (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name_area VARCHAR(50) NOT NULL,
    bloque VARCHAR(50)NOT NULL,
    piso VARCHAR(50)NOT NULL
);

CREATE TABLE tipo_activo (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    anosdevida INTEGER NOT NULL,
    depreciacion FLOAT NOT NULL
);

CREATE TABLE responsable (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50)NOT NULL,
    cargo VARCHAR(50)NOT NULL
);

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50)NOT NULL,
    fechacreacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE monitoreo (
    id_monitoreo INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_area_lectura INTEGER NOT NULL default 1,
    fecha_lectura TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_area_lectura) REFERENCES area(id)
);

CREATE TABLE lectura (
    id_lectura INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_monitoreo INTEGER NOT NULL DEFAULT 1,
    tags VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_monitoreo) REFERENCES monitoreo(id_monitoreo)
);
