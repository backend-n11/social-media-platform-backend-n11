export const setUpController = (req, res) => {
    console.log(`METHOD :${req.method} \n URL : ${req.url}`)
    res.send("OK")
}
