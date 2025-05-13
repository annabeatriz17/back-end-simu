\c postgres

DROP DATABASE IF EXISTS estudantesdb;

CREATE DATABASE estudantesdb;

\c estudantesdb;

CREATE TABLE avaliacao (
    id SERIAL PRIMARY KEY,
    nota INTEGER NOT NULL,
    professor VARCHAR(255) NOT NULL,
    materia VARCHAR(255) NOT NULL,
    sala VARCHAR(255) NOT NULL
);

CREATE TABLE estudante (
    id SERIAL PRIMARY KEY,
    name_estudante VARCHAR(255) NOT NULL,
    photo TEXT,
    avaliacao_id INTEGER REFERENCES avaliacao(id) ON DELETE CASCADE
);

INSERT INTO avaliacao (nota, professor, materia, sala) VALUES
    (10, 'Herbert', 'Matemática', 'Sala 101'),
    ( 5, 'Roberto', 'História', 'Sala 102'),
    ( 8, 'Márcia', 'Biologia', 'Sala 103'),
    ( 10, 'Thiago', 'Química', 'Sala 104'),
    ( 9, 'Felipe', 'Física', 'Sala 105'),
    ( 5, 'Agiota', 'Geografia', 'Sala 106'),
    ( 4, 'Tavin', 'Educação Física', 'Sala 107'),
    ( 7, 'JJ', 'Artes', 'Sala 108');

INSERT INTO estudante (name_estudante, photo, avaliacao_id) VALUES
    ('Maiko', NULL, 1 ),
    ('P.Diddy', NULL, 2),
    ('Márcia', NULL, 3),
    ('JJ', NULL,  4),
    ('Felipe', NULL, 5),
    ('Agiota', NULL, 6),
    ('Tavin', NULL, 7),
    ('Herbert', NULL, 8);