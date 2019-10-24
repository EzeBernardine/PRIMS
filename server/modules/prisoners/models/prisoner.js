const mongoose = require('mongoose');

const prisonerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  DateOfEntry: {
    type: Date,
    required: true
  },
  timeOfEntry: {
    type: String,
    required: true
  },
  LGA: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const Prisoner = mongoose.model('prisoner', prisonerSchema);

module.exports = Prisoner