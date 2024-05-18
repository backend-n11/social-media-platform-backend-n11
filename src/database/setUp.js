import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

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

// export const create = (name, email, password) => {

// }

const setUp = () => {
    pool.query(`
    `)
}

export const query = (text, data)=>{
    pool.query(text, data)
}