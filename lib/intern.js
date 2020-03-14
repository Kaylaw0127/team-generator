const employee = require(`./Employee`)

class Intern extends employee {
    constructor(name, role, id, email, school){
        super(name, id, email, role)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return `Intern`
    }
}


module.exports = Intern