const database  = require("../model/database")
const dataTime  = require("../model/dataTime")
const user      = require("../model/user")

const LIMITSCHEDULED = 2

module.exports = controller = {
    store(request, response){
        try{
            if(!request.body)
                throw "Nenhum dado recebido."

            const {name, birth, schedule} = request.body
            const newUser = new user(name, birth, schedule, false)

            const currentDate   = Date.now()

            const numberScheduledUsers  = dataTime.get(Number(newUser.getSchedule()))
            const exist                 = database.findIndex((data) => data.compare(newUser))

            if(exist !== -1 && (newUser.getSchedule() >= currentDate || newUser.getStatus()))
                throw `Usuario ${name} ja foi cadastrado anteriormente`
            if(newUser.getSchedule() < currentDate)
                throw "Nao se pode cadastrar no passado."
            if(numberScheduledUsers >= LIMITSCHEDULED)
                throw "Hora de agendamento ja esta cheia."

            dataTime.set(newUser.getScheduleInMS(), !numberScheduledUsers ? 1 : numberScheduledUsers+1)
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
    index(request, response){
        try{
            let page = Number(request.params.page)
            let qtd  = Number(request.params.qtd)

            const limit = (page - 1) * qtd + qtd
            const out   = []

            for(let i = limit - qtd; i < limit && i < database.length; i++)
                out.push(database[i])

            if(!out.length)
                throw "No data to show."
    
            response.send({out})
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
    updateStatusTrue(request, response){
        try{
            const name     = String(request.params.name)
            const schedule = new Date(request.params.schedule)

            const scheduleInMS = Number(schedule)

            const index = database.findIndex((data) => data.getName() === name && data.getScheduleInMS() === scheduleInMS)
            if(index === -1)
                throw "User not found."

            database[index].setStatus(true)

            return response.send({user: database[index]})
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
    }
}