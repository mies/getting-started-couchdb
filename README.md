getting-started-couchdb
=======================

Sample application for wercker and couchdb

this uses my couchdb box for wercker:
https://github.com/mies/box-couchdb


[wercker.yml](http://devcenter.wercker.com/articles/werckeryml/) for a nodejs app that uses CouchDB:

``` yaml

box: wercker/nodejs
services:
  - mies/couchdb
# Build definition
build:
  steps: 
    - npm-install
    - npm-test
    - script:
        name: curl
        code: |
          echo $WERCKER_COUCHDB_HOST
          curl "$WERCKER_COUCHDB_HOST:5984"
          curl $WERCKER_COUCHDB_HOST:5984
```

Current status on wercker:
[![wercker status](https://app.wercker.com/status/21e01d1e73b3f3e230a920e6eab2ef80/m "wercker status")](https://app.wercker.com/project/bykey/21e01d1e73b3f3e230a920e6eab2ef80)
