CURR_DIR=$(pwd) 

APPNAME=$1

cd ~/capira/capira-dist/
git remote add $APPNAME ssh://cloudnode@git.cloudno.de/git/Capira/$2.git
git push $1 master
 

# Add MongoDB


