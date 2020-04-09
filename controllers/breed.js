const Breed = require('../models/Breed');
const { normalizeErrors } = require('../helpers/errors');

exports.breedById = function(req, res) {
    const breedId = req.params.id;
  
    Breed.findById(breedId).exec(function(err, foundBreed) {
        console.log(breedId)
      if (err) {
        return res.status(422).send({errors: normalizeErrors(err.errors)});
      }
  
      return res.json(foundBreed);
    });
  };
  

  exports.BreedLists= function(req, res) {
    const name = req.query.name;
    const query = name ? {name: name} : {};
     console.log(query)
    Breed.find(query)
        .exec(function(err, foundBreeds) {
  
      if (err) {
        return res.status(422).send({errors: normalizeErrors(err.errors)});
      }
  
      if (name && foundBreeds.length === 0) {
        return res.status(422).send({errors: [{title: 'No Breed Found!', detail: `There are no Breeds ${name}`}]});
      }
  
      return res.json(foundBreeds);
    });
  };