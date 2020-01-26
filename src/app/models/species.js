import mongoose from 'mongoose';
const speciesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  average_height: {
    type: String
  },
  average_lifespan: {
    type: String
  },
  classification: {
    type: Date
  },
  created: {
    type: Date
  },
  designation: {
    type: String
  },
  edited: {
    type: Date
  },
  eye_colors: {
    type: String
  },
  hair_colors: {
    type: String
  },

  eye_colors: {
    type: String
  },
  homeworld: {
    type: String
  },
  eye_colors: {
    language: String
  },
  name: {
    type: String
  },
  skin_colors: {
    type: String
  },
  people: [{type:Number}],
});
module.exports = mongoose.model('species', speciesSchema, 'species');
