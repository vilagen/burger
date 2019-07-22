var connection = require("./connection.js");

var orm = {
    // function to select all values in burger table.
    selectAll: function(){
        let queryString = "SELECT * FROM  burgers";
        connection.query(queryString, function(err, res){
            if (err) throw "Error getting results for viewing all burgers. " + err;
            console.log(result);
         });
    },
    // function to insert a new burger column
    insertOne: function(burgerName, isDevoured){
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burgerName, isDevoured], function(err, res){
            if (err) throw "Error inserting new burger. " + err;
            console.log(result)
        })
    },
    // function to update a burger. Since only one burger, limited to select col of id
    updateOne: function(whatToUpdate, newValue, idOfBurger){
        let queryString = "UPDATE burgers SET ?? = ? WHERE id = ?";
        connection.query(queryString, [whatToUpdate, newValue, idOfBurger], function(err, res){
            if (err) throw "Error updating burger informatoin. " + err;
            console.log(result)
        });
    }
};

module.exports = orm