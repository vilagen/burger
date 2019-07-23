var connection = require("./connection.js");


// not sure if I need this function right now, but thought it would be useful
function objToSql(object) {
    var arr = []

    for (var key in object) {
        var value = object[key]

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
                }
                arr.push(key + "=" + value) 
            }
        }
        return arr.toString()
    }

var orm = {
    // function to select all values in burger table.
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err) throw "Error getting results for viewing all burgers. " + err;
            cb(res)
            console.log(res);
         });
    },
    // function to insert a new burger column
    insertOne: function(table, rowValue1, rowValue2){
        let queryString = "INSERT INTO " + table + "(??, ??) VALUES (?, ?)";
        connection.query(queryString, [rowValue1.toString(), rowValue2.toString()], function(err, res){
            if (err) throw "Error inserting new burger. " + err;
            cb(res)
            console.log(res)
        })
    },
    // function to update a burger. Since only one burger, limited to select col of id
    updateOne: function(table, colVals, condition, cb){
        let queryString = "UPDATE " + table;

        queryString +=  "SET ";
        queryString += objToSql(colVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString)
        connection.query(queryString, function(err, res){
            if (err) throw "Error updating burger information. " + err;
            console.log(result)
            cb(result)
        });
    }
};

module.exports = orm