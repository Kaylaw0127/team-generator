const employee = require(`./Employee`)

class Manager extends employee {
    constructor(name, role, id, email, officeNumber){
        super(name, id, email, role)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return `Manager`
    }
}


module.exports = Manager