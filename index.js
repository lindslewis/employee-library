const inquirer = require('inquirer');
const cTable = require('console.table');



const initPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Quit"],
            message: 'Pleaser select one from the list below.',
            name: 'all',
        }
    ]).then((ans=> {
        // come back to know how to insert .sql info in here :)
        if(ans.all === "View All Departments") {
            db.query('SELECT * FROM department', function(err, results){
                console.table(results);
            });
            initPrompt()            
        } else if (ans.all === "View All Roles") {
            db.query('SELECT * FROM role', function(err, results){
                console.table(results);
            });
            initPrompt()
        }else if (ans.all === "View All Employees") {
            db.query('SELECT * FROM employee', function(err, results){
                console.table(results);
            });
            initPrompt()
        }else if (ans.all === "Add a Department") {
            newDep()
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

const newDep = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'dep',
        }
    ]).then((ans=> {
        console.log('Added ${ans.dep} to the database.')
        db.query('INSERT INTO department(department) VALUES (ans.dep)')
        initPrompt()
    }))
}