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
        // to view all deps
        if(ans.all === "View All Departments") {
            db.query('SELECT * FROM department', function(err, results){
                console.table(results);
            });
            initPrompt()  
            
        // to view all roles   
        } else if (ans.all === "View All Roles") {
            db.query('SELECT * FROM role', function(err, results){
                console.table(results);
            });
            initPrompt()

        // to view all employees
        }else if (ans.all === "View All Employees") {
            db.query('SELECT * FROM employee', function(err, results){
                console.table(results);
            });
            initPrompt()

        // to add a department
        }else if (ans.all === "Add a Department") {
            newDep()

        // to add a role
        }else if(ans.all === "Add a Role") {
            newRole()

        // to add an employee
        }else if(ans.all === "Add an Employee") {
            console.log("You will now be prompted for information on the new employee.");

        // to update an employee's role
        }else if(ans.all === "Update Employee Role") {
            console.log("You will now be prompted for the new information for your employee.");

        // to quit
        }else {
            console.log("Thank you for using this program.");
            // should possibly have a way to make it go again??
        }
        }
    ))}
initPrompt()

// this is called above
const newDep = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'dep',
        }
    ]).then((ans=> {
        db.query('INSERT INTO department(department) VALUES (ans.dep)', function(err, results) {
            console.log('Added ${ans.dep} to the database.')})
        initPrompt()
    }))
};

const newRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message:'What is the name of the new role?',
            name: 'nrole',
        },
        {
            type:'number',
            message: "What is the salary of the role?",
            name: 'salary',
        },
        {
            type:'list',
            message: "What department does the role belong to?",
            choices: ['Sales', 'Finance', 'Marketing', 'Human Resources', 'IT'],
            name: 'rdep',
        }
    ]).then((ans=> {
        console.log('Added ${ans.nrole} to the database.')
        db.query('INSERT INTO role(title, salary, department_id) VALUES (ans.nrole, ans.salary, ans.rdep)')
    }))
};

const newEmp = () => {
    inquirer.prompt([
        {
            type:
        }
    ])
}