from fabric.api import run

import os

def host_type():
    #run('ls -la /usr/local/var/lib/couchdb')
    run('sudo ls -la /var/lib/couchdb')
    run('sudo ls -la /var/couchdb')