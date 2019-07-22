var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect(function(err){
if (err) {"Problems connectiong to SQL database: " + err;
    return;
    }
    console.log("Connected as id " + connection.threadId)
});

module.exports = connection