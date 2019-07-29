const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_basics"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err) {
        if (err) throw err;
        console.log("Table created");
    });
});
