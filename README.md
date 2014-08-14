#[freetemplatesdownload.info](http://freetemplatesdownload.info/) [![Build Status](https://travis-ci.org/LubomirGeorgiev/freetemplatesdownload.info.svg?branch=master)](https://travis-ci.org/LubomirGeorgiev/freetemplatesdownload.info)
Free HTML Web Templates. The place where you can download web templates just for free.
___

##Dependencies
1. [**Jekyll**](www.jekyllrb.com)
    * [Rouge Highlighter](https://github.com/jneen/rouge) (to install `gem install rouge`)
2. [Grunt.js](www.gruntjs.com)
3. [Node.js (npm)](www.nodejs.org)
    * ([Dependencies at package.json](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/package.json))
4. [Bower](http://bower.io/)
    * [twbs/bootstrap](https://github.com/twbs/bootstrap) ([Official Website](http://getbootstrap.co))
    *  [Jquery](http://jquery.com/)

##Running, compiling and installing it

1.  Install [Node.js](www.nodejs.org)
2.  Install [Jekyll](http://jekyllrb.com/)
2.  Install `grunt-cli` globally with `npm install -g grunt-cli`
3.  `$cd` to the directory and run `npm install` to install the necessary `npm` dependencies
4.  Then run `bower install` to install the front-end dependencies

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

![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)  Да живее майка България!!!  ![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)

![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coat_of_arms_of_Bulgaria.svg/300px-Coat_of_arms_of_Bulgaria.svg.png)

**Build with all the :heart: in the world.**