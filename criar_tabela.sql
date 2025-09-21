CREATE SCHEMA banco_exemplo_proj;
USE banco_exemplo_proj;

CREATE TABLE peca_tipo_1 (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_contagem INT NOT NULL,
    data_fabricacao DATE NOT NULL,
	tipo VARCHAR(40) NOT NULL,
	tempo_ciclo TIME NOT NULL,
    peca1_status BOOL DEFAULT 1
);

CREATE TABLE peca_tipo_2 (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_contagem INT NOT NULL,
    data_fabricacao DATE NOT NULL,
	tipo VARCHAR(40) NOT NULL,
	tempo_ciclo TIME NOT NULL,
    peca2_status BOOL DEFAULT 1
);

CREATE TABLE peca_tipo_3 (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_contagem INT NOT NULL,
    data_fabricacao DATE NOT NULL,
	tipo VARCHAR(40) NOT NULL,
	tempo_ciclo TIME NOT NULL,
    peca3_status BOOL DEFAULT 1
);