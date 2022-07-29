const inquirer = require('inquirer');
const { formatWithOptions } = require('util');
const { table } = require('console');
const mysql = require('mysql2');
const cTable = require('console.table');

// const index = require('index.js');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '$t@rmY86mflf',
        database: 'staff_db'
    },
    console.log('connected to the staff_db database.')
);


const initPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role","Delete Department","Quit"],
            message: 'Please select one from the list below.',
            name: 'all',
        }
    ]).then((ans=> {
        // to view all deps
        if(ans.all === "View All Departments") {
            db.query('SELECT * FROM department', function(err, results){
                console.table(results);
                initPrompt()  
            });
      
            
        // to view all roles   
        } else if (ans.all === "View All Roles") {
            db.query('SELECT * FROM role', function(err, results){
                console.table(results);
                initPrompt()
            });
           

        // to view all employees
        }else if (ans.all === "View All Employees") {
            db.query('SELECT * FROM employee', function(err, results){
                console.table(results);
                initPrompt()
            });
            

        // to add a department
        }else if (ans.all === "Add a Department") {
            newDep()

        // to add a role
        }else if(ans.all === "Add a Role") {
            newRole()

        // to add an employee
        }else if(ans.all === "Add an Employee") {
            newEmp()

        // to update an employee's role
        }else if(ans.all === "Update Employee Role") {
            updateEmp()

        // to delete a department
        }else if(ans.all === "Delete Department"){


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
        db.query("INSERT INTO department(department) VALUES (?)", [ans.dep], function(err, results) {
            console.log(`Added ${ans.dep} to the database.`)
            initPrompt()
        })
    
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
        // since departments can be added, we will need to redo how the choices are called
            type:'list',
            message: "What department does the role belong to?",
            choices: ['Sales', 'Finance', 'Marketing', 'Human Resources', 'IT'],
            name: 'rdep',
        }
    ]).then((ans=> {
            db.query('INSERT INTO role(title, salary, department_id) VALUES (?,?,?)', [ans.nrole, ans.salary, ans.rdep], function(err,results){
                console.log(`Added ${ans.nrole} to the database.`)
                initPrompt()
            })
    }))
    
};

const newEmp = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'first',
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last',
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: 'SELECT role.title AS name, role.id AS value FROM role',
            name: 'empRole',
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            choices: ['Marshall Diaz', 'Marcelyn Samuel', 'no manager'],
            name: 'manage',
        }
    ]).then((ans => {
            db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', 
            [
                ans.first, 
                ans.last, 
                ans.empRole, 
                ans.manage
            ],
             function(err, results){
                console.log(`Added ${ans.first} ${ans.last} to the database.`)
                initPrompt()
            })
    }))
   
};
// SELECT newRole.title AS name, role.id AS value FROM role

const updateEmp = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Which employee's role is being updated?",
            choices: ['Marcelyn Samuel', 'Sigmund Samaras', 'Legend Laine', 'Mitra Pesty', 'Aurora Richard', 'Marshall Diaz', 'Yvain Grahame', 'Shavon Pander', 'Julianna Mills'],
            name: 'who',

        },
        {
            type: 'list',
            message: "What role do you want to assign to this employee?",
            choices: ['Sales Lead', 'Sales Associate', 'Payroll Clerk', 'Purchasing Manager', 'Marketing Analyst', 'Marketing Specialist', 'Recruiter', 'HR Coordinator', 'System Engineer', 'Support Specialist'],
            name: 'newrole'
        }
    ]).then((ans=>{
        db.query(`UPDATE employee SET role_id = ${ans.newrole} WHERE name = ${ans.who}`), function(err,results) {
            console.log(`Successfully updated ${ans.who} in the database.`)
            initPrompt()

        }
    }));
}

const deleteDep = () => {
    let currentDep = db.query('SELECT*FROM department');
        inquirer.prompt ([
            {
                type: 'list',
                message: "Which department is being dissolved?",
                name: 'delDep',
                choices: [currentDep]
            }
        ]).then ((ans => {
            db.query("DELETE FROM department WHERE department= [ans.delDep]", function(err, results){
                console.log(`Successfully dissolved ${ans.delDep}.`)
            })
        }))
}