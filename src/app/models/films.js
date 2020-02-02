import mongoose from 'mongoose';



const filmsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  created: {
    type: Date
  },
  director: {
    type: String
  },
  edited: {
    type: Date
  },
  episode_id: {
    type: Number
  },
  opening_crawl: {
    type: String
  },
  producer: {
    type: String
  },
  release_date: {
    type: String
  },
  title: {
    type: String
  },
  characters: [{type:Number}],
  planets: [{type:Number}],
  vehicles: [{type:Number}],
  species: [{type:Number}],
  starships: [{type:Number}]
});

module.exports = mongoose.model('Films', filmsSchema);