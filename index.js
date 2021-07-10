const inquirer = require("inquirer");
const fs = require("fs");
const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
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
    <style>
    .makecenter {
        text-align: center;
    }
</style>
</head>
<body>
<header> 
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 text-center"> ${team.name} </h1>
        </div>
    </div>
</header>
    <div class="makecenter">
    `


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
    // these functions create the cards for each employee and adds them to the html 
    createManagerCard();
    createEngineerCard();
    createInternCard();
    teampage += `
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
    `
    // console.log(team.teamMembers);
    fs.writeFile('./dist/index.html', teampage, (err) => {
        if ( err ) console.log('err:', err);
    })

}
const createManagerCard = () => {
    // filters the array by role
    managerData = team.teamMembers.filter( (teamMember) => teamMember.role === "manager");
    // the forEach function iterates through the new array made from the filter
    managerData.forEach(manager => {
        teampage += ` 
        <div class="card d-inline-flex" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${manager.role}</h6>
                </div>
                <div class="card-details">
                    <p class="card-text">Id: ${manager.id}</p>
                    <p>Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>
                    <p> office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
        `
        
    });

}
const createEngineerCard = () => {
    // filters the array by role
    engineerData = team.teamMembers.filter( (teamMember) => teamMember.role === "engineer");
    // the forEach function iterates through the new array made from the filter
    engineerData.forEach(engineer => {
        teampage += ` 
        <div class="card d-inline-flex" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${engineer.role}</h6>
                </div>
                <div class="card-details">
                    <p class="card-text">Id: ${engineer.id}</p>
                    <p>Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></p>
                    <p>Github: <a href="https://github.com/${engineer.github}" class="card-link">Github link</a>
                </div>
            </div>
        </div>
        `
        
    });

}
const createInternCard = () => {
    // filters the array by role
    internData = team.teamMembers.filter( (teamMember) => teamMember.role === "intern");
    // the forEach function iterates through the new array made from the filter
    internData.forEach(intern => {
        teampage += ` 
        <div class="card d-inline-flex" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header">
                    <h5 class="card-title">${intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${intern.role}</h6>
                </div>
                <div class="card-details">
                    <p class="card-text">Id: ${intern.id}</p>
                    <p>Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></p>
                    <p> School: ${intern.school}</p>
                </div>
            </div>
        </div>
        `
        
    });

}


init();