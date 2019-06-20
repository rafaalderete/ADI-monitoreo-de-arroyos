const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicionSchema = new Schema({
  nivel: {
    type: Number
  },
  temperatura: {
    type: Number
  },
  timestamp: {
    type: Date
  }
});

module.exports = mongoose.model('Medicion', MedicionSchema);