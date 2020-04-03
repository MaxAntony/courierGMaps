const { Schema, model } = require('mongoose');

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    direction: {
      lat: { type: String, required: true },
      lon: { type: String, required: true },
    },
  },
  { timestamps: true },
);

module.exports = model('Client', ClientSchema);
