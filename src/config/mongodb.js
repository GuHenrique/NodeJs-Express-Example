const {
  Hermodr
} = require('../shared/sources/hermodr-cmd-express');

try {
  const mongoose = require('mongoose');

  mongoose.connect('mongodb+srv://hermodr:hermodr123@cluster0.10pgo.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (e) {
  Hermodr.error("mongodb.js", "Could not connect to the database");
}