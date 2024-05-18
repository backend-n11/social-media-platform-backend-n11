export const setUpUsersQuery = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        created_at TIMESTAMP default CURRENT_TIMESTAMP,
        gender VARCHAR(50) NOT NULL
    );
    `
}
