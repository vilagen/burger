var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, val1, val2,cb) {
        orm.inserOne("burgers", cols, val1, val2, function(res){
            cb(res)
        })
    },
    update: function(colVals, condition, cb) {
        orm.updateOne("burgers", colVals, condition, function(res){
            cb(res)
        })
    }
}

module.exports = burger;