import People from '../models/people';
import Films from '../models/films';
import Vehicles from '../models/vehicles';
import Planets from '../models/planets';
import Species from '../models/species';

exports.task4 = (req, res) => {
  Planets.aggregate(
    [
      {
        $lookup: {
          from: People.collection.name,
          localField: 'id',
          foreignField: 'homeworld',

          as: 'pilots'
        }
      },

      { $unwind: '$pilots' },

      {
        $lookup: {
          from: Vehicles.collection.name,
          localField: 'pilots.id',
          foreignField: 'pilots',

          as: 'vehicles'
        }
      },
      { $unwind: '$vehicles' },
      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          pilots: {
            id: 1,
            name: 1
          },
          vehicles: 1
        }
      },
      {
        $lookup: {
          from: Species.collection.name,
          localField: 'vehicles.pilots',
          foreignField: 'id',

          as: 'species'
        }
      },
      { $unwind: '$species' },
      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          pilots: {
            id: 1,
            name: 1
          },
          species: {
            id: 1,
            name: 1
          }
        }
      },

      {
        $group: {
          _id: {
            _id: '$_id',
            id: '$id',
            name: '$name',
            pilots: '$pilots',
            species: {
              id: '$species.id',
              name: '$species.name'
            }
          },

          count: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          pilots: {
            id: 1,
            name: 1
          },
          species: {
            id: 1,
            name: 1
          },
          count: 1
        }
      },

      {
        $group: {
          _id: { total: '$count' },
          response: {
            $push: {
              _id: '$_id._id',
              id: '$_id.id',
              name: '$_id.name',
              pilots: '$_id.pilots',
              species: '$_id.species'
            }
          }
        }
      },

      { $sort: { _id: -1 } },
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
