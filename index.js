const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = new Team("The A Squad");

let teampage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title> Dev Team Page</title>
</head>
<body>
<header> 
    <h2> ${team.name} </h2>
</header>`

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
const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"

        },
        {
            type: "input",
            message: "What is your Id?",
            name: "id"

        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"

        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"

        }
    ])
    .then( ( {name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber)
        team.addToTeam(manager);
        addAnotherTeamMember();
    })
}
const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name?",
            name: "name"

        },
        {
            type: "input",
            message: "What is their Id?",
            name: "id"

        },
        {
            type: "input",
            message: "What is their email?",
            name: "email"

        },
        {
            type: "input",
            message: "What is their github?",
            name: "github"

        }
    ])
    .then(( {name, id, email, github}) => {
        const addedEnginer = new Engineer(name, id, email, github)
        team.addToTeam(addedEnginer);
        addAnotherTeamMember();
    })
}
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name?",
            name: "name"

        },
        {
            type: "input",
            message: "What is their Id?",
            name: "id"

        },
        {
            type: "input",
            message: "What is their email?",
            name: "email"

        },
        {
            type: "input",
            message: "Which school do they attend?",
            name: "school"

        }
    ])
    .then(( {name, id, email, school}) => {
        const addedIntern = new Intern(name, id, email, school)
        team.addToTeam(addedIntern);
        addAnotherTeamMember();
    })
}

const addAnotherTeamMember = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of Team Member would you like to add to your team?",
            choices: ["Engineer", "Intern", "Team is complete"],
            name: "addedTM"
        }
    ])
    .then(({addedTM}) => {
        switch(addedTM){
          case "Engineer":
            addEngineer();
            break;
    
          case "Intern":
            addIntern();
            break;

          case "Team is complete":
            createTeamPage();
            break;
        }
      })
}
const createTeamPage = () => {
    createManagerCard();
    // console.log(team.teamMembers);
}
const createManagerCard = () => {
    managerData = team.teamMembers.filter( (teamMember) => teamMember.role === "manager")
    managerData.forEach(member => {
        console.log(member[0])
        
    });
    // console.log(managerData);

}


init();