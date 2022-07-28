const { table } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

// const index = require('index.js');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '$t@rmY86mflf',
        database: 'staff_db'
    },
    console.log('connected to the staff_db database.')
);


db.query('SELECT * FROM department', function(err, results){
    console.table(results);
});

db.query('SELECT * FROM role', function(err, results){
    console.table(results);
});

db.query('SELECT * FROM employee', function(err, results){
    console.table(results);
});

db.query('INSERT INTO department(department) VALUES ()')
// app.get('/api/all-departments', console.table(['id','department'], results), (req,res)=> {
//     db.query('SELECT *  FROM department', (err, results) => {
//         console.log(results);
//         if(err){

//         }
//         // const dep =  
//         // console.table(['id', 'name'], dep);
//     })
// });

