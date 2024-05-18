import { getUserByid } from "../database"

export const userController = (req, res) => {

}


export const userById = async (req, res) => {
    const id = req.params.id
    const user = await getUserByid(id)

    res.send(user)
}


