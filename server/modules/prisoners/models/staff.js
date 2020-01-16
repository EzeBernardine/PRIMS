const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  lga: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff