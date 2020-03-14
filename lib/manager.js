const employee = require(`./Employee`)

class Manager extends employee {
    constructor(name, role, id, email, number){
        super(name, id, email, role)
        this.number = number
    }

    getOfficeNumber(){
        return this.number
    }

    getRole(){
        return `Manager`
    }
}


module.exports = Manager