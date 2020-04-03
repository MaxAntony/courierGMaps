const { Schema, model } = require('mongoose');

const MotocyclistSchema = new Schema(
  {
    currentOrder: { type: Object, required: false },
    ordersDelivered: { type: Array, required: false },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    direction: {
      lat: { type: String, required: true },
      lon: { type: String, required: true },
    },
  },
  { timestamps: true },
);

module.exports = model('Motocyclist', MotocyclistSchema);
