const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/prison-app';

mongoose.connect(DB_URI, {useNewUrlParser: true})

mongoose.connection.once('open', () => console.log('Connected to MOngoDB'));
mongoose.connection.on('error', error => console.log(error));

module.exports = mongoose;