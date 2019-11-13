const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meals', { useNewUrlParser: true });
module.exports = mongoose;