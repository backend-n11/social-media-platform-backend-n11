import { getAllUser, getUserById, addUser, usersUpdate, deletesUser } from "../database/index.js"
import Joi from "joi"

function validation(user) {
    let schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(4)
            .max(16),
        gender: Joi.string()
            .alphanum()
            .min(3)
            .max(7)
            .required(),
    })
    return schema.validate(user)
}



export const getUsers = async (req, res) => {
    const users = await getAllUser()
    if (users) {
        res.status(200).json({ status: "Ok", data: users })
    }

}


export async function userById(req, res, next) {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        next(error);  // Bu yerda xatoni middleware'ga uzatamiz
    }
}


export const createUser = async (req, res) => {
    try {
        let { error } = validation(req.body)
        if (error) {
            console.log(error)
        }
    } catch (error) {
        res.status(400).send("Malumotlar chala kiritilgan")


    }
    let { username, email, password, gender } = req.body

    let result = await addUser(username, email, password, gender)

    console.log(result)

    if (!result) {
        res.send("Malumotlarda xatolik bor")

    }
    res.send(result)

}

export const deleteUser = async (req, res) =>{
    try {
        let id  = req.params.id
        let result = null
        try {
            result = await deletesUser(id)
        } catch (error) {
            res.send("Bunday id li foydalanuvchi topilmadi")
        }
        res.send("Ochirib tashlandi")

    } catch (error) {
        console.log(error)
        res.status(500).send("Serverda xato mavjud")
    }
}

export const userUpdate = async (req, res) =>{
    try {
        let id = req.params.id
        let {username, email, password, gender} = req.body
        let result = await usersUpdate(username, email, password, gender, id)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

