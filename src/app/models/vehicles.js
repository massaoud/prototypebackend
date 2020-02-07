import mongoose from 'mongoose';
const vehicleSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    vehicle_class: {
      type: String
    },
    pilots: [{ type: Number }]
  },
  //{ toObject: { virtuals: true } },
);

/********************** VIRTUAL JOIN BETWEEN FILMS VEHICLES   ************************/
vehicleSchema.virtual('films_vehicles', {
  ref: 'Films',
  localField: 'id',
  foreignField: 'vehicles',
  options: { sort: { number: 1 } }
}); 
module.exports = mongoose.model('Vehicles', vehicleSchema);
