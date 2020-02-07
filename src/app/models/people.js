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
  { toJSON: { virtuals: true } }
);

/********************** VIRTUAL JOIN BETWEEN FILMS PEOPLES   ************************/
peopleSchema.virtual('films_characters', {
  ref: 'Films',
  localField: 'id',
  foreignField: 'characters'
});

/********************** VIRTUAL JOIN BETWEEN SPECIES PEOPLES   ************************/

peopleSchema.virtual('people_species', {
  ref: 'Species',
  localField: 'id',
  foreignField: 'people'
});

/********************** VIRTUAL JOIN BETWEEN VEHICLES PEOPLES   ************************/
peopleSchema.virtual('people_vehicles', {
  ref: 'Vehicles',
  localField: 'id',
  foreignField: 'pilots'
});

module.exports = mongoose.model('People', peopleSchema, 'people');
