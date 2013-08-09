  var cradle = require('cradle');
  var db = new(cradle.Connection)('http://' + process.env.WERCKER_COUCHDB_HOST, 5984).database('cities');
  db.create();
  db.save([
    { name : 'San Francisco'},
    { name : 'Amsterdam'},
    { name : 'Berlin'},
    { name : 'New York'},
  ], function (err, res) {
      if (err) {
          console.log('error');
          console.log(err)
      } else {
          console.log('cities saved!');
      }
  });

  db.all(function(err, res) {
    if (err) {
        console.log('Error: %s', err)
    } else {
        console.log(res);
    }
  });
