const mongoose = require('mongoose');

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://' + user +':' + password + '@adi-db-kkses.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('adi-db connectada'))
  .catch(err => console.error(err));