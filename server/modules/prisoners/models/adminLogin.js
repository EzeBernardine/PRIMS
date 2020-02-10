const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

adminSchema.pre('save', function(){
  const hashedPassword = bcrypt.hashSync(this.password, 12);
  this.password = hashedPassword
})

const AdminLogin = mongoose.model('adminLogin', adminSchema);
module.exports = AdminLogin