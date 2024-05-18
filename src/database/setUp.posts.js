export const setUpPostsQuery = () => {
    const query = `
    CREATE TABLE
    posts(
        id SERIAL PIRMARY KEY, title VARCHAR(30) NOT NULL, 
        body VARCHAR(100) NOT NULL, user_id int,
        status VARCHAR(100) NOT NULL, image VARCHAR(100), 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`
}
