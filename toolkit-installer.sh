#!/bin/sh

## WARNING ##
# This script might render your machine vulnerable. I WON'T COMPENSATE FOR ANY DAMAGES INDUCED BY THIS SCRIPT! Please use with care!

# Check if npm is installed
command -v npm >/dev/null 2>&1 || { echo >&2 "I require npm but it's not installed. Please install npm first! Aborting."; exit 1; }

# update npm
echo "Updating npm for you"
npm update 

# checking npm permissions. (As suggested in https://docs.npmjs.com/getting-started/fixing-npm-permissions)
dir1242=$(npm config get prefix)
case $dir1242 in
	/usr/local)
		# is this realy always necessary?
		echo "Changing owner of npm's directory to $(whoami)."
		sudo chown -R $(whoami) $dir1242/lib/node_modules $dir1242/bin $dir1242/share;;
	/usr)
		echo "Changing npm's default directory."
		if [ ! -d "~/npm-global" ]; then
			mkdir ~/npm-global
			npm config set prefix '~/npm-global'
			## Now we have to add ~/npm-global/bin to the PATH variable. Easiest wold be to append export PATH=~/npm-global/bin:$PATH to ~/.profile. However the user might have an Terminal that does use another file.
			## For now we are using an ENV variable.
			NPM_CONFIG_PREFIX=~/npm-global
		fi;;
	*)
		;;
esac

# maybe we shold check if the tools are installed already?
echo "Installing grunt-cli, yo and bower for you."
npm install -g grunt-cli yo bower

### pulling and installing project
echo "Pulling and installing the capira project to ~/capira."
# checking wether git is installed
command -v git >/dev/null 2>&1 || { echo >&2 "I require git but it's not installed. Please install git first! Aborting."; exit 1; }

mkdir ~/capira && cd ~/capira
git clone https://github.com/capira12/capira.git
cd capira
npm install
bower update