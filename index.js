const inquirer = require('inquirer');
const conTable = require('console.table');



const initPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Quit"],
            message: 'Pleaser select one from the list below.',
            name: 'all',
        },
    ]).then((ans=> {
        // come back to know how to insert .sql info in here :)
        if(ans.all === "View All Departments") {
            console.log('You are now viewing all departments.');
            // console.table
        } else if (ans.all === "View All Roles") {
            console.log("You are now viewing all current roles.");
        }else if (ans.all === "View All Employees") {
            console.log("You are now viewing all current employees.");
        }else if (ans.all === "Add a Department") {
            console.log("You will now be prompted to add a new department.");
        }else if(ans.all === "Add a Role") {
            console.log("You will now be prompted for information on the new role.");
        }else if(ans.all === "Add an Employee") {
            console.log("You will now be prompted for information on the new employee.");
        }else if(ans.all === "Update Employee Role") {
            console.log("You will now be prompted for the new information for your employee.");
        }else {
            console.log("Thank you for using this program.");
            // should possibly have a way to make it go again??
        }
        }
    ))}
initPrompt()

