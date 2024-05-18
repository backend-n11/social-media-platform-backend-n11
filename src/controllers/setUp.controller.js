import {
    setUp
} from "../database/index.js"

export const setUpController = (req, res) => {
    console.log(`METHOD :${req.method} \n URL : ${req.url}`)
    setUp()
    res.send("OK")
}
