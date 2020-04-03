const { Schema, model } = require('mongoose');

const OrderSchema = new Schema(
  {
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    content: { type: String, required: true },
    dimensions: {
      hight: { type: String, required: true },
      width: { type: String, required: true },
      weight: { type: String, required: true },
    },
  },
  { timestamps: true },
);

module.exports = model('Order', OrderSchema);
