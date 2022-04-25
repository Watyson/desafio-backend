const express   = require("express")
const morgan    = require("morgan")
const router    = require("./config/router")

const PORT  = 3333
const app   = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na PORTA ${PORT}.`)
})