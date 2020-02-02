import mongoose from 'mongoose';
const transportSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  cargo_capacity: {
    type: String
  },
  consumables: {
    type: String
  },
  cost_in_credits: {
    type: String
  },
  cargo_capacity: {
    type: String
  },
  created: {
    type: Date
  },
  crew: {
    type: String
  },
  edited: {
    type: Date
  },
  length: {
    type: String
  },
  manufacturer: {
    type: String
  },

  max_atmospering_speed: {
    type: String
  },
  model: {
    type: String
  }
  ,name: {
    type: String
  }
  ,
  passengers: {
    type: String
  }
});

module.exports = mongoose.model('Transport', transportSchema, 'Transport');

