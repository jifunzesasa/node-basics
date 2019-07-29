const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_basics"
});

con.connect(function (err) {
    if (err) throw err;
    const sql = "DROP TABLE customers";
    con.query(sql, function (err) {
        if (err) throw err;
        console.log("Table deleted");
    });
});
