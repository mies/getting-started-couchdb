from fabric.api import run

import os

def host_type():
    run('sudo ls -la /var/lib/couchdb/1.0.1')