import pg from "pg"
import dotenv from "dotenv"

import {
    setUpPostsQuery
} from "./setUp.posts.js"

import {
    setUpUsersQuery
} from "./setUp.users.js"

dotenv.config()


import { createUser, selectAllUsers, selectOneUser, updateUser, deleteUser } from "./users.querys.js"

const { Pool } = pg



const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE
} = process.env

const pool = new Pool({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    database: POSTGRES_DATABASE
})

const query = async (text, params) => await pool.query(text, params)


export const setUp = async () => {

    // setUpPostsQuery
    const setUpUsersQueryString = setUpUsersQuery()
    // console.log(setUpUsersQueryString)
    try {
        const result = await query(setUpUsersQueryString)
        console.log(result)
        return "ok"

    } catch (error) {
        console.log(error)
        return ""
    }
}




export const getAllUser = async () => {
    try {
        let result = await query(selectAllUsers(), [])
        if (result.rows.length > 0) {
            return result.rows
        } else {
            return "Foydalanuvchilar topilmadi"
        }
    } catch (error) {
        return ""
    }
}

export const getUserById = async (id) => {
    try {
        let result = await query(selectOneUser(), [id])
        if (result.rows.length > 0) {
            return result.rows
        } else {
            return "Bunday id li foydalanuvchi topilmadi"
        }
    } catch (error) {
        console.log(error)
        return ""
    }
}


export const addUser = async (username, email, password, gender) => {
    try {
        console.log(username, email, password, gender)
        let result = await query(createUser(), [username, email, password, gender])
        const user = result.rows[0]

        if (result.rowCount > 0) {

            return {username:user.username, email:user.email, gender:user.gender}
        } else {
            return "ERROR"
        }

    } catch (err) {
        console.log("ok")
        return ""
    }
}


export const usersUpdate = async (username, email, password, gender, id) => {
    try {
        let result = await query(updateUser, [username, email, password, gender, id])
        return "Malumotlar yangilandi"
    } catch (err) {
        console.log(err)
        return "ERROR"
    }
}

export const deletesUser = async (id) => {
    try {
        let result = await query(deleteUser, [id])
        return result
    } catch (err) {
        console.log(err)
        return ""
    }
}
