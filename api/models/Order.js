const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  client: { type: String, required: true },
  phone: { type: Number, required: true },
  visitDate: { type: Date, required: true },
});
