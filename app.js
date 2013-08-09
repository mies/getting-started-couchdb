var nano = require('nano')('http://' + process.env.WERCKER_COUCHDB_HOST + ':5984');
var db_name = "test";
var db = nano.use(db_name);

function insert_doc(doc, tried) {
  db.insert(doc,
    function (error,http_body,http_headers) {
      if(error) {
        if(error.message === 'no_db_file'  && tried < 1) {
          // create database and retry
          return nano.db.create(db_name, function () {
            insert_doc(doc, tried+1);
          });
        }
        else { return console.log(error); }
      }
      console.log(http_body);
  });
}

insert_doc({nano: true}, 0);
