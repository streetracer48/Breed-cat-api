const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breedSchema = new Schema({
  name: { type: String, required: true, max: [40, 'Too long, max is 40 characters']},
  description: { type: String, required: true, lowercase: true },
  temperament : { type: String, required: true, lowercase: true},
  origin: { type: String, required: true, lowercase: true, min: [3, 'Too short, min is 4 characters'] },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Breed', breedSchema );