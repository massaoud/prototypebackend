import People from '../models/people';
import Films from '../models/films';
import Vehicles from '../models/vehicles';
import ErrorHandler from '../helpers/dbErrorHandler';
import Planets from '../models/planets';


/* Planets.aggregate(
  [
    {
      $lookup: {
        from: Films.collection.name,
        localField: 'id',
        foreignField: 'planets',

        as: 'films_planets'
      }
    },

    { $unwind: '$films_planets' },

    {
      $lookup: {
        from: Films.collection.name,
        localField: 'vehicles',
        foreignField: 'id',

        as: 'vehicles_films'
      }
    },

    {
      $lookup: {
        from: People.collection.name,
        localField: 'id',
        foreignField: 'pilots',

        as: 'vehicles_pilots'
      }
    },

    // { $unwind: '$vehicles_films' },
    {
      $project: {
        _id: 1,
        id: 1,
        name: 1,
        films_planets: 1,
        vehicles_films: 1
        /*    films_planets: {
            id: 1,
            title: 1,
            totalVehicles: { $size: '$films_planets.vehicles' },
          //  vehicles_films :1
          }  
      }
    } 
    /*  {
        $group: {
          _id: '$_id',
          obj: {
            $push: {
              id: '$id',
              name: '$name',
              films: {
                id: 'films_planets.id',
                title: 'films_planets.title',
                totalVehicles: 'films_planets.totalVehicles'
              }
            }
          }
        }
      } 
    // { $sort : { age : -1, posts: 1 } }
  ],
  
 /*  function(err, result) {
    if (err) {
      next(err);
    } else {
      res.json(result);
    }
  }
); */
//};
exports.task4 = (req, res) => {
  Planets.find()
    .populate({ path:'planets_films',  select:'title' })
    .populate({ path: 'films_vehicules', select: 'id title films_characters' })
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        res.json(data);
      }
    });
}
