#[freetemplatesdownload.info](http://freetemplatesdownload.info/)
Free HTML Web Templates. The place where you can download web templates just for free.
___

##Dependencies
1. [**Jekyll**](www.jekyllrb.com)
    * [Rouge Highlighter](https://github.com/jneen/rouge) (to install `gem install rouge`)
2. [Grunt.js](www.gruntjs.com) - (more info in [/gruntfile.js](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/gruntfile.js))
3. [Node.js](www.nodejs.org) (Dependencies: `grunt-contrib-less`, `grunt-contrib-watch`, `grunt-prettify`)
5. [Node Packaged Module](www.npmjs.org) npm (Dependencies at [/package.json](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/package.json))


If you want to run it locally you need to compile the website using `Jekyll`. It's pretty straightforward.

- [Jekyll - Installation](http://jekyllrb.com/docs/installation/)
- [Jekyll - Basic Usage](http://jekyllrb.com/docs/usage/)
- [Jekyll - Directory structure](http://jekyllrb.com/docs/structure/)


___
##CSS
The main `global.css` is compiled using `Grunt.js`

###How it works?
There are two task that you can use to compile the CSS `grunt less:dev` and `grunt less:prod`.

`grunt less:dev` is used while you are working on the CSS. It generates a source map and it doesn't compress the CSS so that it is easily readable.

`grunt less:prod` compresses, minifies, optimizes and removes the source map so that the CSS is clean and ready for production deployment.

For more info look at [/gruntfile.js](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/gruntfile.js)

####How to manipulate the css?
Assuming that you have installed `Node.js` and `npm` you should run `npm install -g grunt-cli` to install it globally then `$cd` to the project's directory and run `npm install` this will install all the necessary dependencies and now you are good to go.  :)

Further Instructions at: [Working with an existing Grunt project](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project)
___
When you BUILD the website with Jekyll this is what you should get.


`````
.
│   .htaccess
│   all-templates.html
│   index.html
│   sitemap.html
│
├───blog
│   └───wp-content
│       └───themes
│           └───freetemplatesdownload
│               └───includes
│                       nav-dropdown-links.html
│
├───bootstrap
│   ├───css
│   │       bootstrap.min.css
│   │
│   ├───fonts
│   │       glyphicons-halflings-regular.eot
│   │       glyphicons-halflings-regular.svg
│   │       glyphicons-halflings-regular.ttf
│   │       glyphicons-halflings-regular.woff
│   │
│   └───js
│           bootstrap.min.js
│
├───css
│       global.css
│       global.map
│
├───ErrorDocuments
│       403.html
│       404.html
│
├───livepreview
│   ├───businessbox
│   │   │   about.html
│   │   │   contact.html
│   │   │   features.html
│   │   │   index.html
│   │   │   services.html
│   │   │
│   │   └───css
│   │           about.css
│   │           contact.css
│   │           services.css
│   │           style.css
│   │
│   ├───freshco
│   │   │   index.html
│   │   │
│   │   └───css
│   │           style.css
│   │
│   ├───inspirator
│   │   │   index.html
│   │   │
│   │   └───css
│   │           style.css
│   │
│   ├───inspirator-v2
│   │   │   index.html
│   │   │
│   │   └───css
│   │           style.css
│   │
│   ├───pager
│   │   │   index.html
│   │   │
│   │   └───css
│   │           style.css
│   │
│   ├───purity
│   │   │   index.html
│   │   │
│   │   └───css
│   │           style.css
│   │
│   ├───urbanprism
│   │   │   aboutus.html
│   │   │   contacts.html
│   │   │   index.html
│   │   │   index2.html
│   │   │
│   │   └───css
│   │           aboutus.css
│   │           style.css
│   │
│   ├───yourcoolportfolio
│   │       index.html
│   │       style.css
│   │
│   └───yourflatportfolio
│           index.html
│           style.css
│
└───template
        businessbox.html
        freshco.html
        inspirator-v2.html
        inspirator.html
        pager.html
        purity.html
        urbanprism.html
        yourcoolportfolio.html
        yourflatportfolio.html
`````
___
For more information go to www.freetemplatesdownload.info