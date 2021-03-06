# capira


## Adding Capira as a sidewide tool in Moodle
```
https://docs.moodle.org/22/en/External_tool_settings
```

### Enable Fullscreen

Add as HTML Description:
```
<script>setTimeout(function(){document.querySelector('iframe').setAttribute('allowFullScreen', 'true')},1500);</script>
```
Check 'Show description on start'

## Install Tools

Install node.js (i.e. via homebrew).


Then install gulp and bower
```
npm install -g gulp-cli bower
```
If you encounter an `EACCES` error, please consult this site: https://docs.npmjs.com/getting-started/fixing-npm-permissions


## Clone Project:
```
 mkdir capira && cd capira
 git clone https://github.com/capira12/capira.git
 cd capira
```

## Install Project:
Install node dependencies and JS-Frameworks.
```
 npm install
 bower update
```

## Dev Server
Start development server:
```
 gulp serve
```
Use this URLs for development: 
```
 http://localhost:3000/player/index.html
 http://localhost:3000/plain-player/index.html
 http://localhost:3000/editor/index.html
```

# Further

## Use Tools
To let the tools take care of dependencies, install new npm/gulp packages like:
```
npm install awesome-gulp-plugin --save
```
This will automatically update your bower.json.

To update your local dependencies-folder run
```
 npm update
```

## Build Project:
```
 gulp build:player or gulp build:editor
```

## Generator:
```
 yo polymer:element my-element
```
## Shipit:
```
 npm install --global shipit-cli
```
