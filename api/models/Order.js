const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  clientName: { type: String, required: true },
  phone: { type: Number, required: true },
  service: { type: String, required: true },
  visitDate: { type: Date, required: true },
  slots: [
    {
      time: {
        type: String,
        enum: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"],
        required: true,
      },
      available: { type: Boolean, default: true },
    },
  ],
  instagram: { type: String, required: false },
});

module.exports = mongoose.model("Order", OrderSchema);
