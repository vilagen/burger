var connection = require("./connection.js");

var orm = {
    selectAll: function(){
        let queryString = "SELECT * FROM  burgers";
        connection.query(queryString, function(err, res){
            if (err) throw "Error getting results for viewing all burgers. " + err;
            console.log(result);
         });
    },
    insertOne: function(burgerName, isDevoured){
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burgerName, isDevoured], function(err, res){
            if (err) throw "Error inserting new burger. " + err;
            console.log(result)
        })
    },
    updateOne: function(colToUpdate, newValue, howToFind, valueBeingSearched){
        let queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [colToUpdate, newValue, howToFind, valueBeingSearched], function(err, res){
            if (err) throw "Error updating burger informatoin. " + err;
            console.log(result)
        });
    }
};

module.exports = orm