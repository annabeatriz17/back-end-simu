CREATE DATABASE estudantesdb;

\c estudantesdb;

CREATE TABLE avaliacao (
    id SERIAL PRIMARY KEY,
    nota INTEGER NOT NULL,
    professor VARCHAR(255) NOT NULL
);

CREATE TABLE estudante (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    numero_registro INTEGER NOT NULL,
    photo TEXT,
    avaliacao_id INTEGER REFERENCES avaliacao(id) ON DELETE CASCADE
);

INSERT INTO avaliacao (nota, professor) VALUES 
    ( 10, 'Thiago'),
    ( 9, 'Felipe'),
    ( 5, 'Agiota'),
    ( 4, 'Tavin');

INSERT INTO estudante (name, numero_registro, photo, avaliacao_id) VALUES 
    ('Afonso', 1, NULL, 2 ),
    ('Cadu', 2, NULL, 1),
    ('Luizao', 3, NULL, 3),
    ('Luizao', 4, NULL,  4);