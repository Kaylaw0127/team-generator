const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []


function addEmployee() {
    inquirer
        .prompt({
            type: "list",
            message: 'Are you ready to build your team?',
            choices: ['yes', 'no'],
            name: 'begin',
        }).then((answer) => {
            if (JSON.stringify(answer) === '{"begin":"yes"}') {
                inquirer
                    .prompt({
                        type: "list",
                        message: 'What type of Employee would you like to add?',
                        choices: ['Manager', 'Engineer', 'Intern'],
                        name: 'employeeType',

                    }).then((employeeType) => {
                        switch (JSON.stringify(employeeType)) {
                            case '{"employeeType":"Manager"}':
                                manager()
                                break
                            case '{"employeeType":"Engineer"}':
                                engineer()
                                break
                            case '{"employeeType":"Intern"}':
                                intern()
                                break
                            default:
                                break
                        }
                    })
            } else {
                console.log('Goodbye!')
            }
        })
    }

// function anotherEmployee() {
//     inquirer
//         .prompt({
//             type: "list",
//             message: 'Would you like to add another employee?',
//             choices: ['yes', 'no'],
//             name: 'anotherEmployee'
//         }).then((answer) => {
//             if (JSON.stringify(answer) == '{"initialize":"yes"}') {
//                 inquirer
//                     .prompt({
//                         type: "list",
//                         message: 'What type of Employee would you like to add?',
//                         choices: ['Manager', 'Engineer', 'Intern'],
//                         name: 'employeeType'
//                     }).then((employeeType) => {
//                         switch (JSON.stringify(employeeType)) {
//                             case '{"employeeType":"Manager"}':
//                                 manager()
//                                 break
//                             case '{"employeeType":"Engineer"}':
//                                 engineer()
//                                 break
//                             case '{"employeeType":"Intern"}':
//                                 intern()
//                                 break
//                             default:
//                                 break
//                         }
//                     })
//             } else { render(employees) }
//         })
// }

function manager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: 'What\'s your manager\'s name',
                name: 'managerName'
            },
            {
                type: "input",
                message: 'What\'s your manager\'s ID number?',
                name: 'managerId'
            },
            {
                type: "input",
                message: 'What\'s your manager\'s email?',
                name: 'managerEmail'
            },
            {
                type: "input",
                message: 'What\'s your manager\'s office number?',
                name: 'managerNumber'
            }
        ]).then((answers) => {
            const currentManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber, 'Manager')
            employees.push(currentManager)
            anotherEmployee()
        })
}



addEmployee()