CREATE DATABASE estudantesdb;

\c estudantesdb;

CREATE TABLE avaliacao (
    id SERIAL PRIMARY KEY,
    nota INTEGER NOT NULL,
    professor VARCHAR(255) NOT NULL,
    photo TEXT
);

CREATE TABLE estudante (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    numero_registro INTEGER NOT NULL,
    avaliacao_id INTEGER REFERENCES avaliacao(id) ON DELETE CASCADE
);

INSERT INTO avaliacao (nota, professor, photo) VALUES 
    ( 10, 'Thiago', NULL),
    ( 9, 'Felipe', NULL),
    ( 5, 'Agiota', NULL),
    ( 4, 'Tavin', NULL);

INSERT INTO estudante (name, numero_registro, avaliacao_id) VALUES 
    ('Afonso', 1, 2),
    ('Cadu', 2, 1),
    ('Luizao', 3,  3),
    ('Luizao', 4,  4);