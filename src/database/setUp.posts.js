export const setUpPostsQuery = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS posts(
        id SERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(50) NOT NULL,
        body TEXT NOT NULL,
        
    );




`

}
