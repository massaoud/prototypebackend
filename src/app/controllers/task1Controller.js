import Films from '../models/films';
import ErrorHandler from '../helpers/dbErrorHandler';

exports.all = (req, res) => {
  Films.find()
    .populate('films_characters', 'title')
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        res.json(data);
      }
    });
};

exports.task1 = (req, res) => {
  Films.aggregate(
    [
      {
        $project: {
          _id: 1,
          id: 1,
          title: 1,
          director: 1,
          edited: 1,
          episode_id: 1,
          opening_crawl: 1,
          producer: 1,
          release_date: 1,
          // people: '$characters',
          count: { $size: '$characters' }
        }
      },
      
      { $sort: { count: -1 } },
      { $limit: 1 }
    ],
    function(err, result) {
      if (err) {
        next(err);
      } else {
        res.json(result[0]);
      }
    }
  );
};

exports.read = (req, res) => {
  return res.json(req.films);
};

exports.task1ById = (req, res, next, id) => {
  Films.findById(id).exec((err, films) => {
    if (err || !res) {
      return res.status(400).json({
        error: 'Films Not exist'
      });
    } else {
      req.films = films;
      next();
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
  //Films.aggregate.sortByCount('characters')
  Films.aggregate([
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

/* exports.alls = (req, res) => {
  Films.find()
    .count()
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      } else {
        res.json(data);
      }
    });
};
 */
