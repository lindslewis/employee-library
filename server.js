const express = require('express');
const mysql = require('mysql2');
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

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});