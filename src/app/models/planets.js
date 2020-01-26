import mongoose from 'mongoose';

const planetsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  climate: {
    type: String
  },
  created: {
    type: Date
  },
  diameter: {
    type: String
  },
  edited: {
    type: Date
  },
  gravity: {
    type: String
  },
  name: {
    type: String
  },
  orbital_period: {
    type: String
  },
  population: {
    type: String
  },
  rotation_period: {
    type: String
  },
  surface_water: {
    type: String
  },
  terrain: {
    type: String
  } 
 }) ;
 //,{ toObject: { virtuals: true } }
// ,{ toJSON: { virtuals: true } })

/* planetsSchema.virtual('films_planets', {
  ref: 'Films',
  localField: 'id',
  foreignField: 'planets', 
  options: { sort: { number: 1 } }
});
 */
module.exports = mongoose.model('Planets', planetsSchema);
