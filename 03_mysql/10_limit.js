const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_basics"
});

con.connect(function (err) {
    if (err) throw err;
    const sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
