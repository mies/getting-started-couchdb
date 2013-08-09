  var cradle = require('cradle');
  var db = new(cradle.Connection)('http://' + process.env.WERCKER_COUCHDB_HOST, 5984).database('baseball');

  //db.create();
  db.exists(function (err, exists) {
    if (err) {
      console.log('error', err);
    } else if (exists) {
      console.log('the force is with you.');
    } else {
      console.log('database does not exists.');
      db.create();
      /* populate design documents */
    }
  });

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
