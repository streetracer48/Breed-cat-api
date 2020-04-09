const express = require('express');
const Breed = require('../controllers/breed');
const router = express.Router();


router.get('/:id', Breed.breedById);
router.get('', Breed.BreedLists);

module.exports = router;