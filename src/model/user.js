module.exports = class user {
    constructor(name, birth, schedule, status) {
        this.setName(name)
        this.setBirth(birth)
        this.setSchedule(schedule)
        this.setStatus(status)
    }

    getName()       {return this.name}
    getBirth()      {return this.birth}
    getSchedule()   {return this.schedule}
    getStatus()     {return this.status}

    getBirthInMS()      {return Number(this.birth)}
    getScheduleInMS()   {return Number(this.schedule)}

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
    setSchedule(schedule){
        const aux = new Date(schedule)
        if(!aux instanceof Date || isNaN(aux))
            throw("Schedule invalid.")

        this.schedule = aux
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