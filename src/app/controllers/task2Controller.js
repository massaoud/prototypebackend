import People from '../models/people';
import Films from '../models/films';
import Planets from '../models/planets';



exports.task2s = (req, res) => {
  People.aggregate(
    [
      {
        $lookup: {
          from: Films.collection.name,
          localField: 'id',
          foreignField: 'characters',
          as: 'films'
        }
      },

      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          totalFilms: { $size: '$films' }
        }
      },
      {
        $group: {
          _id: '$totalFilms',
          response: {
            $push: {
              _id: '$_id',
              id: '$id',
              name: '$name',
              numberOfFilm: '$totalFilms'
            }
          }
        }
      },
      { $sort: { numberOfFilm: -1 } },
       { $limit: 1 }
    ],
    function(err, result) {
      if (err) {
        next(err);
      } else {
        res.json(result[0].response);
      }
    }
  );
};


