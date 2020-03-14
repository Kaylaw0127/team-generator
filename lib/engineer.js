const employee = require(`./Employee`)

class Engineer extends employee {
    constructor(name, role, id, email, github){
        super(name, id, email, role)
        this.github = github
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return `Engineer`
    }
}


module.exports = Engineer