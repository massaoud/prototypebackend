import Films from '../models/films';
import Species from '../models/species';
import People from '../models/people';
exports.task3s = (req, res) => {
  Films.aggregate(
    [
      {
        $lookup: {
          from: Species.collection.name,
          localField: 'people',
          foreignField: 'characters',
          as: 'people_species'
        }
      },

      { $unwind: '$people_species' },

      {
        $project: {
          _id: 1,
          id: 1,
          name: 1,
          title: 1,
          nbr: { $size: '$characters' },
          //people_species: 1,
          people_species: {
            _id: 1,
            id: 1,
            title: 1,
            name: 1,
            nbrPeople: { $size: '$people_species.people' }
          }
        }
      },

      {
        $group: {
          _id: { id: '$id', nbr: '$people_species.nbrPeople' },
          response: {
            $push: {
              id: '$id',
              //title: '$title',
              people_species: {
                id: '$people_species.id',
                title: '$people_species.name',
                nbrPeople: '$people_species.nbrPeople' //'$people_species.nbrPeople'
              }
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
