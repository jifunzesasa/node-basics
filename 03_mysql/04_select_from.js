const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_basics"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result) {
        if (err) throw err;
        console.log(result[0].name);
    });
});
