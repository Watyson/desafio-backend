module.exports = class user {
    constructor(name, birth, schedule, status) {
        this.setName(name)
        this.setBirth(birth)
        this.setSchedule(schedule)
        this.setStatus(status)
    }

    getName()          {return this.name}
    getBirth()         {return this.birth}
    getBirthString()   {return this.birth.getUTCDate()+"/"+this.birth.getUTCMonth()+"/"+this.birth.getUTCFullYear()}
    getSchedule()      {return this.schedule}
    getScheduleString(){return this.schedule.getUTCDate()+"/"+this.schedule.getUTCMonth()+"/"+this.schedule.getUTCFullYear()}
    getStatus()        {return this.status[0] === 'R'}
    getStatusString()  {return this.status}

    getBirthInMS()      {return Number(this.birth)}
    getScheduleInMS()   {return Number(this.schedule)}

    setName(name){
        if(!name instanceof String || !name.trim())
            throw("Nome invalido.")

        this.name = name
    }
    setBirth(birth){
        const currentDate = new Date()
        const aux = new Date(birth)
        if(!birth || !aux instanceof Date || isNaN(aux) || aux.getTime() >= currentDate.getTime())
            throw("Data de aniversario invalida.")

        this.birth = aux
    }
    setSchedule(schedule){
        const currentDate = new Date()
        const aux = new Date(schedule)
        if(!schedule || !aux instanceof Date || isNaN(aux)  || aux.getTime() <= currentDate.getTime())
            throw("Data do agendamento invalida.")

        this.schedule = aux
    }
    setStatus(status){
        if(typeof status !== "boolean")
            throw("Estado da vacina invalido.")
        
        if(status)
            this.status = "Realizado"
        else
            this.status = "Pendente"
    }

    compare(data){
        return data.name === this.name && data.getBirthInMS() == this.getBirthInMS()
    }
}