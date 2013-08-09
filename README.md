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
