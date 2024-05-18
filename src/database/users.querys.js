export function createUser() {
    const query = `insert into users (username, email,  password, gender) values ($1, $2, $3, $4) RETURNING *`
    return query
}


export function selectAllUsers() {
    const query = `SELECT * FROM users`
    return query
}

export function selectOneUser() {
    const query = `SELECT * FROM users WHERE id = $1`
    return query

}

export function updateUser() {
    const query = `UPDATE users set username = $1, email = $2, password = $3, gender = $4 where email = $5 RETURNING *`
    return query

}

export function deleteUser() {
    const query = 'DELETE FROM users where id = $1'
    return query
}