var orm = require("../burger/config/orm.js")

// console log all of the items.
orm.selectAll();

// insert new burger named Whopper
orm.insertOne("Whopper", "false");

// update one
orm.updateOne("devoured", "true", "1")