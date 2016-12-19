# keeto-website
Official Keeto.io website https://keeto.io

# Pre-Requirements
* npm (https://docs.npmjs.com/)
* `npm install` in root dir

# Build Keeto.io website
To build the Keeto.io website simply execute the following commands in root dir
* `npm install` //Install all npm packages from package.json
* `./node_modules/.bin/grunt` //Run 'default' grunt tasks from Gruntfile.js
* Done :-)

# What needs to be uploaded?
Upload all files in `webroots` folder. Everything is bundled in there with Grunt :)

#I'd like to change some CSS
Prio 1: NEVER change anything in `webroots/` folder except from images in `webroot/static/img/` as everything else is bundled with Grunt.

* Run the Grunt watcher `./node_modules/.bin/grunt watch:sass`.
* Then do your changes in `sass/*.scss` files.

The watcher process will take care to compile your changes to the CSS file(s).

#I'd like to change some JS
...imagine Prio 1: NEVER change anything in `webroots/` folder except from images in `webroot/static/img/`  as everything else is bundled with Grunt.
* Run the Grunt watcher `./node_modules/.bin/grunt watch:js`.
* Then do your changes in `js/frontend.js`.

The watcher process will take care to compile your changes to the JS file(s).

