import {Router} from 'express'

const healthrouter = Router()

healthrouter.get("/", (req, res) => {
    return res.status(200).json({ message: "API funcionando!" })
})

export default healthrouter