#[freetemplatesdownload.info](http://freetemplatesdownload.info/) 

[![Build Status](https://travis-ci.org/LubomirGeorgiev/freetemplatesdownload.info.svg?branch=master)](https://travis-ci.org/LubomirGeorgiev/freetemplatesdownload.info)   [![devDependency Status](https://david-dm.org/LubomirGeorgiev/freetemplatesdownload.info/dev-status.svg)](https://david-dm.org/LubomirGeorgiev/freetemplatesdownload.info#info=devDependencies)   [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Free HTML Web Templates. The place where you can download web templates just for free.
___

##Dependencies
1. [**Jekyll**](www.jekyllrb.com)
    * [Rouge Highlighter](https://github.com/jneen/rouge) (to install `gem install rouge`)
2. [Grunt.js](www.gruntjs.com)
3. [Node.js (npm)](www.nodejs.org)
    * ([Dependencies at package.json](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/package.json))
4. [Bower](http://bower.io/)
    * [twbs/bootstrap](https://github.com/twbs/bootstrap) ([Documentation](http://getbootstrap.com))
    *  [Jquery](http://jquery.com/)

##Running, compiling and installing it

1.  [Download the repository](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/archive/master.zip)
2.  Install [Node.js](www.nodejs.org)
3.  Install [Ruby](https://www.ruby-lang.org/)
4.  Run `gem install bundler`
5.  `$cd` to the directory
6.  Run `bundle install`
7.  Install 'grunt-cli' globally with `npm install -g grunt-cli`
8.  Install 'bower' globally with `npm install -g bower`
8.  Run `npm install` to install the necessary "npm" dependencies
10. Then run `bower install` to install the front-end dependencies
11. You are ready to rock!!! :)

___
##Grunt Workflow:

-   **`grunt serve`** - Compiles all files and opens the site in your default browser. A watch task watches for changes to files and recompiles if necessary, and injects the changes into the browser with LiveReload.
    - `grunt serve:dist` will run "grunt build" and open the result in your default browser
-   **`grunt build`** - Builds an optimized site to the /dist directory. [Usemin blocks](https://github.com/yeoman/grunt-usemin#the-useminprepare-task) are concatenated, [CSS](https://github.com/gruntjs/grunt-contrib-cssmin), [images](https://github.com/gruntjs/grunt-contrib-imagemin), and [HTML](https://github.com/gruntjs/grunt-contrib-htmlmin) are minified, [JavaScript is uglified](https://github.com/gruntjs/grunt-contrib-uglify), and assets are [revved](https://github.com/yeoman/grunt-filerev) for cache busting.
-   **`grunt check`** - Checks code quality with Jshint and CSS Lint.
-   **`grunt (default)`** - Runs unit tests with "grunt test", checks the code with "grunt check" and finally builds it with "grunt build"

**For more info**: [robwierzbowski/generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb)


___
##Last Thoughts

:point_right: For more information go to www.freetemplatesdownload.info :point_left:

Author: Lubomir Georgiev(Любомир Георгиев)

Copyright :copyright: 2014 Lubomir Georgiev(Любомир Георгиев) lubomirgeorgievgeorgiev@gmail.com

[![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)](http://en.wikipedia.org/wiki/Bulgaria)  **Да живее майка България!!!**  [![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)](http://en.wikipedia.org/wiki/Bulgaria)

[![Lubomir Georgiev](http://freetemplatesdownload.info/images/signature.svg)](https://github.com/LubomirGeorgiev)

**Build with all the :heart: in the world.**
