import mongoose from 'mongoose';
const peopleSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    birth_year: {
      type: String
    },
    created: {
      type: Date
    },
    edited: {
      type: Date
    },
    eye_color: {
      type: String
    },
    gender: {
      type: String
    },
    hair_color: {
      type: String
    },

    height: {
      type: String
    },
    homeworld: {
      type: Number
    },
    mass: {
      type: String
    },
    name: {
      type: String
    },
    skin_color: {
      type: String
    }
  },
  { toObject: { virtuals: true } });

peopleSchema.virtual('films_characters', {
  ref: 'Films',
  localField: 'id',
  foreignField: 'characters',
  options: { sort: { number: 1 } }
});


module.exports = mongoose.model('people', peopleSchema, 'people');
