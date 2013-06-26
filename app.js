  var cradle = require('cradle');
  var db = new(cradle.Connection)(process.env.WERCKER_COUCHDB_HOST, 5984).database('starwars');
  console.log(process.env.WERCKER_COUCHDB_HOST);

  db.get('vader', function (err, doc) {
      doc.name; // 'Darth Vader'
      assert.equal(doc.force, 'dark');
  });

  db.save('skywalker', {
      force: 'light',
      name: 'Luke Skywalker'
  }, function (err, res) {
      if (err) {
          // Handle error
      } else {
          // Handle success
      }
  });