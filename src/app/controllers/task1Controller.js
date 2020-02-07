import Films from '../models/films';


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
          nbr: { $size: '$characters' }
        }
      },
      {
        $group: {
          _id: '$nbr',
          response: {
            $push: {
              id: '$id',
              title: '$title',
              numberOfCharacter: { $max: '$nbr' }
            }
          }
        }
      },
     { $sort: { numberOfCharacter: -1 } },
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
