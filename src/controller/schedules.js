const database  = require("../model/database")
const dataTime  = require("../model/dataTime")
const user      = require("../model/user")

const LIMITSCHEDULED = 2

module.exports = controller = {
    store(request, response){
        try{
            if(!request.body) throw "Nenhum dado recebido."

            const {name, birth, schedule} = request.body
            const newUser = new user(name, birth, schedule, false)

            const currentDate   = Date.now()

            const numberScheduledUsers  = dataTime.get(Number(newUser.getSchedules()))
            const exist                 = database.findIndex((data) => data.compare(newUser))

            if(exist !== -1 && (newUser.getSchedules() >= currentDate || newUser.getStatus()))
                    throw `Usuario ${name} ja foi cadastrado anteriormente`
            if(newUser.getSchedules() < currentDate)    throw "Nao se pode cadastrar no passado."
            if(numberScheduledUsers >= LIMITSCHEDULED)  throw "Hora de agendamento ja esta cheia."

            dataTime.set(newUser.getSchedulesInMS(), !numberScheduledUsers ? 1 : numberScheduledUsers+1)
            database.push(newUser)

            response.send({message: `${name} agendado com sucesso.`})
        }
        catch(error){
            if(typeof error === "string"){
                response.status(400).send({message: error})
            }
            else{
                console.log(error)
                response.status(500).send({message: "Something bad happen."})
            }
        }
    },
}