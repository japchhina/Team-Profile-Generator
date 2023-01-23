const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Employee = require('./lib/employee')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html")

console.log( 
    '\nThis is your team profile generator.'
);
function appMenu () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        }
    ]).then(function (data) {
        switch (data.role) {
            case 'Manager':
                managerPrompt();
                break;
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Exit':
                console.log('Thank you for using the Team Profile Generator!');
                break;
        }
    })
}
