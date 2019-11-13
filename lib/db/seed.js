const Sample = require('../models/Sample');
const sampleData = require('./sample.json');

Sample.remove({}).then(res => {
    Sample.collection.insert(sampleData)
      .then(samples => {
        console.log(samples)
      })
      .catch(err => {
        console.log(err)
      });         
  });