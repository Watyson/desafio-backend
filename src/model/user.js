const crypto    = require("crypto")

module.exports = class user {
    constructor(name, birth, schedules, status) {
        this.setName(name)
        this.setBirth(birth)
        this.setSchedules(schedules)
        this.setStatus(status)
    }

    getName()       {return this.name}
    getBirth()      {return this.birth}
    getSchedules()  {return this.schedules}
    getStatus()     {return this.status}

    getBirthInMS()      {return Number(this.birth)}
    getSchedulesInMS()  {return Number(this.schedules)}

    setName(name){
        if(!name instanceof String || !name.trim())
            throw("Name invalid.")

        this.name = name
    }
    setBirth(birth){
        const aux = new Date(birth)
        if(!aux instanceof Date || isNaN(aux))
            throw("Birth invalid.")

        this.birth = aux
    }
    setSchedules(schedules){
        const aux = new Date(schedules)
        if(!aux instanceof Date || isNaN(aux))
            throw("Schedules invalid.")

        this.schedules = aux
    }
    setStatus(status){
        if(typeof status !== "boolean")
            throw("Vaccine Status invalid.")

        this.status = status
    }

    compare(data){
        return data.name === this.name && data.getBirthInMS() == this.getBirthInMS()
    }
}