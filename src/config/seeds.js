var Seed = require('seed')
  , MongoStore = require('seed-mongodb')
  , store = new MongoStore({
    db: 'unicon' // db Name
    , host: 'localhost' // host
    , port: 27017 // port
  });

var Person = Seed.Model.extend('person', {
  store: store
});

var author = new Person({
  id: 'author'
  , name: 'Test User'
  , occupation: 'Karan'
});

arthur.save(function (err) {
  if (err) return console.error(err);
  console.log('Arthur has been saved!');
});