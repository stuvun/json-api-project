const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bestbuy', { useNewUrlParser: true });
module.exports = mongoose;