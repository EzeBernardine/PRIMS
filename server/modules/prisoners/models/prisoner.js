const mongoose = require('mongoose');

const prisonerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    // required: true
  },
  nationality: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  dateImprisoned: {
    type: String,
    required: true
  },
  dateReleased: {
    type: String,
    required: true
  },
  timeImprisoned: {
    type: String,
    // required: true
  },
  timeReleased: {
    type: String,
    // required: true
  },
  lga: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  prisonunit: {
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