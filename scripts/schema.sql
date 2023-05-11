SET TIME ZONE 'America/Santiago';

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(80) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    in_force BOOLEAN NOT NULL DEFAULT true
);
