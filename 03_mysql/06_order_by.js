const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_basics"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
