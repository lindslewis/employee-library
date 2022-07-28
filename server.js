const { table } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

// const index = require('index.js');

const PORT = process.env.PORT || 3001;
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


db.query('SELECT * FROM departments', (err, results) => {
    console.table(results);
});

// app.get('/api/all-departments', console.table(['id','department'], results), (req,res)=> {
//     db.query('SELECT *  FROM department', (err, results) => {
//         console.log(results);
//         if(err){

//         }
//         // const dep =  
//         // console.table(['id', 'name'], dep);
//     })
// });

app.post('/api/view-departments', (req,res)=> {
    
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});