const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: req.body.name,
    qty: req.body.qty,
    price: req.boq.price,
    model:req.body.model,
});

module.exports = {OrdersSchema};
