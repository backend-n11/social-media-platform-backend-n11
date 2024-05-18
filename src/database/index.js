import pg from "pg"
import dotenv from "dotenv"
import {
    setUpPostsQuery
} from "./setUp.posts.js"
import {
    setUpUsersQuery
} from "./setUp.users.js"

dotenv.config()


import {
    selectAllUsers,
    selectOneUser,
    updateUser,
    deleteUser
} from "./users.querys.js"

const {
    Pool
} = pg

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DATABASE
} = process.env
const pool = new Pool({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    database: POSTGRES_DATABASE
})

export const setUp = async () => {

    // setUpPostsQuery
    const setUpUsersQueryString = await setUpUsersQuery()
    console.log(setUpUsersQueryString)

    const result = await pool.query(setUpUsersQueryString)
    console.log(result)
    return "ok"
}

export const usersUpdate = async (username, email, password, gender) => {
    let result = await pool.query(updateUser, [username, email, password, gender])
}

export const getUserByid = async (id) => {
    let result = await pool.query(selectOneUser, id)
    return result.rows
}