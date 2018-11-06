const mongoose = require('mongoose');

const URI = 'mongodb://ubatubamay:unicornio8!@ds151943.mlab.com:51943/heroku_4c8p1rnr';

mongoose.connect(URI, {useNewUrlParser: true} )
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;