var orm = require("../burger/config/orm.js")

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(colValue1, colValue2, cb) {
        orm.inserOne("burgers", colValue1, colValue2, function(res){
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