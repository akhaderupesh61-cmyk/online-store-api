const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root@123",
    database: "shop_db"
});

const db = pool.promise();
console.log("MySql connection pool created with promises");

module.exports = db;