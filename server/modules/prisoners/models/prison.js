const mongoose = require('mongoose');


const prisonSchema = new mongoose.Schema({
  prisonName: {
    type: String,
    required: true
  },
  prisonManager: {
    type: String,
    required: true
  },
  prisonManagerPhone: {
    type: String,
    required: true
  },
  mdImage: {
    type: String,
    required: true
  },
  prisonState: {
    type: String,
    required :true
  },
  prisonLGA: {
    type: String,
    required: true
  },
  prisonDetail: {
    type: String,
    required: true
  },
  prisonImage: {
    type: String,
    required: true
  }
})

const Prison = mongoose.model('prison', prisonSchema);
module.exports = Prison;