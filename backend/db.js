import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Mohdghouse123",
    database: "ecomdb"
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ MySQL Connected!");
});

export default db;