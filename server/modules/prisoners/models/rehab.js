const mongoose = require('mongoose');

const rehabSchema = new mongoose.Schema({
  rehabManagerPhone: {
    type: String
  },
  rehabCenter: {
    type: String,
  },
  rehabManager: {
    type: String,
  },
  mdImage: {
    type: String,
  },
  rehabState: {
    type: String,
  },
  rehabLGA: {
    type: String,
  },
  tag: {
    type: String,
  },
  rehabDetail: {
    type: String,
  },
  rehabImage: {
    type: String,
  },
  isAccepted: {
    type: Boolean
  }
})

const Rehab = mongoose.model('rehab', rehabSchema);

module.exports = Rehab