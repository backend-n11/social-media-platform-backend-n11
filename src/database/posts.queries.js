export const createPosts = async (title, body, user_id, status, image) => {
    const data = `INSERT INTO posts(title, body, user_id, status, image)  VALUES($1, $2, 3$, 4$, $5) RETURNING *`
}

export const getAllposts = async (title, body, user_id, status, image) => {
    const data = `SELECT * FROM posts`
}

export const getPostById = async (title, body, user_id, status, image) => {
    const data = `SELECT * FROM posts WHERE id = $1`
}

export const getPostByUser = async (title, body, user_id, status, image) => {
    const data = `SELECT * FROM posts WHERE user_id = $1`
}

export const updatePost = async (title, body, user_id, status, image) => {
    const data = `UPDATE posts SET title = $1, body = $2, user_id = $3, status = $4, image = $5`
}

export const deletePost = async (id) => {
    const data = `DELETE FROM posts WHERE id = $1`
}