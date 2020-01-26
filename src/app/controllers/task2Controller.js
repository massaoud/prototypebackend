import People from '../models/people';
import Films from '../models/films';
import ErrorHandler from '../helpers/dbErrorHandler';
import Planets from '../models/planets';

exports.read = (req, res) => {
  People.find()
    .where('name')
    .equals('Leia Organa')
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        console.log(data);
        res.json(data);
      }
    });
};
/*
exports.task2 = (req, res) => {
  return res.json(req.people);
};

exports.task2s = (req, res) => {
  People.aggregate(
    [
      {
        $unwind: { path: '$played',  includeArrayIndex: "arrayIndex" }
      },
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
          played: { $size: '$films' }
        }
      },
      {
        $unwind: { path: '$played',  includeArrayIndex: "arrayIndex" }
      },
      {
        $group: {
          _id: '$played',
          maxVal: { $max: '$played' }
        }
      },
      { $sort: { maxVal: -1 } }
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

*/

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
          name: 1,
          total: { $size: '$films' }
        }
      },

      { $sort: { total: -1 } }
    ],
    function(err, result) {
      if (err) {
        next(err);
      } else {
        let max = Math.max.apply(
          Math,
          result.map(function(o) {
            return o.total;
          })
        );
        console.log('MAX ' + max);
        res.json(
          result.filter(item => {
            return item.total === max;
          })
        );
      }
    }
  );
};

/*
exports.allPeople = (req, res) => {
  People.find()
    .populate({ path: 'films_characters', select: 'id title films_characters' })

    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        let max = Math.max.apply(
          Math,
          data.map(function(o) {
            return o.films_characters;
          })
        );
        console.log('MAX ' + max);
        res.json(
          data.filter(item => {
            return item.films_characters === max;
          })
        );
      }
    });
};*/

exports.planets = (req, res) => {
  Planets.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    } else {
      res.json(data);
    }
  });
};
//aggregate.count("userCount"); collation({ }).exec()
/*Users.aggregate(
  { $group: { _id: 1, characters: { $max: '$age' } } },
  { $project: { _id: 1, characters: 1 } },
  function(err, res) {
    if (err) return handleError(err);
    console.log(res); 
    // [ { maxAge: 98 } ]
  }
);*/
//aggregate.sortByCount('users');
/*
exports.all = (req, res) => {
  //people.aggregate.sortByCount('characters')
  people.aggregate([
    {
      $group: {
        _id: '$total_wins',
        my_winner: { $max: '$characters' }
      }
    },
    { $sort: { _id: -1 } },
    { $limit: 1 }
  ]);
};*/
