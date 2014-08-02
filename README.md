#[freetemplatesdownload.info](http://freetemplatesdownload.info/)
Free HTML Web Templates. The place where you can download web templates just for free.
___

##Dependencies
1. [**Jekyll**](www.jekyllrb.com)
    * [Rouge Highlighter](https://github.com/jneen/rouge) (to install `gem install rouge`)
2. [Grunt.js](www.gruntjs.com) - (Dependencies: [`grunt-contrib-less`](https://github.com/gruntjs/grunt-contrib-less#getting-started), [`grunt-contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch#getting-started), [`grunt-prettify`](https://github.com/jonschlinkert/grunt-prettify#grunt-prettify---))
3. [Node.js](www.nodejs.org)
4. [Node Packaged Module](www.npmjs.org) npm ([/package.json](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/package.json))
5. [twbs/bootstrap](https://github.com/twbs/bootstrap) ([Official Website](http://getbootstrap.co))

___
##CSS
The main `global.css` is compiled using `Grunt.js`

###How it works?
There are two task that you can use to compile the CSS `grunt less:dev` and `grunt less:prod`.

`grunt less:dev` is used while you are working on the CSS. It generates a source map and it doesn't compress the CSS so that it is easily readable.

`grunt less:prod` compresses, minifies, optimizes and removes the source map so that the CSS is clean and ready for production deployment.

For more information look at [/gruntfile.js](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/gruntfile.js)

####How to manipulate the css?
Assuming that you have installed `Node.js` and `npm` you should run `npm install -g grunt-cli` to install it globally then `$cd` to the project's directory and run `npm install` this will install all the necessary dependencies and now you are good to go.  :)

Further Instructions at: [Working with an existing Grunt project](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project)

___
##Running and compiling it

In order to run it you will need `Jekyll`. If you want to play and experiment with it you are gonna have to install grunt and the other [#dependencies](https://github.com/LubomirGeorgiev/freetemplatesdownload.info#dependencies). Have fun :smiley:
 
- [Jekyll - Installation](http://jekyllrb.com/docs/installation/)
- [Jekyll - Basic Usage](http://jekyllrb.com/docs/usage/)
- [Jekyll - Directory structure](http://jekyllrb.com/docs/structure/)

___
##Last Thoughts

:point_right: For more information go to www.freetemplatesdownload.info :point_left:

Author: Lubomir Georgiev(Любомир Георгиев)

Copyright :copyright: 2014 Lubomir Georgiev(Любомир Георгиев) lubomirgeorgievgeorgiev@gmail.com

![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)  Да живее майка България!!!  ![Long live mother Bulgaria!!!](http://upload.wikimedia.org/wikipedia/commons/2/29/Icons-flag-bg.png)

**Build with all the :heart: in the world.**
