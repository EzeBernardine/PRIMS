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
  }
})

const staff = mongoose.model('staff', staffSchema);

module.exports = staff