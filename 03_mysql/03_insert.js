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
    const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
