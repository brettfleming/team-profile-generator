const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = new Team("The A Squad");

function init() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Are you the Manager?",
                choices: [ "Yes", "No"],
                name: "isManger"
            }
        ]
        )
        .then(({isManger}) => {
            switch(isManger){
              case "Yes":
                addManager();
                break;
        
              case "No":
                console.log("Access Denied!!!");
                init();
                break;
            }
          })
}
function addManager() {
    
}

init();