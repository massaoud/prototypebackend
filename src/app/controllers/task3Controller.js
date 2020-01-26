import Films from '../models/films';
import Species from '../models/species';

exports.task3s = (req, res) => {
  Species.aggregate(
    [
      {
        $lookup: {
          from: Films.collection.name,
          localField: 'id',
          foreignField: 'species',
          as: 'species_films'
        }
      },

      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          totalFilms: { $size: '$species_films' }
        }
      },

      { $sort: { totalFilms: -1 } }
    ],
    function(err, result) {
      if (err) {
        next(err);
      } else {
        res.json(result);
      }
    }
  );
};
