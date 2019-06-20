const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/adi-db', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('adi-db connected'))
  .catch(err => console.error(err));