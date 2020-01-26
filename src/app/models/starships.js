import mongoose from 'mongoose';

const starshipsSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    MGLT: {
      type: String
    },
    hyperdrive_rating: {
      type: String
    },
    starship_class: {
      type: String
    },
     pilotes: [{type:Number}]
});

module.exports = mongoose.model('StarsShips', starshipsSchema);
