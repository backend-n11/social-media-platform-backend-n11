import {
    setUp
} from "../database/index.js"

export const setUpController = async (req, res) => {
    console.log(`METHOD :${req.method} \n URL : ${req.url}`)
    await setUp()
    res.send("OK")
}
