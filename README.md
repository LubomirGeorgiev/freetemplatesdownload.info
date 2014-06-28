#[freetemplatesdownload.info](http://freetemplatesdownload.info/)
Free HTML Web Templates. The place where you can download web templates just for free.
___

###Dependencies
1. Web Server
2. **`Jekyll`** (www.jekyllrb.com)
4. Grunt.js (www.gruntjs.com) - (more info in `package.json`)
5. Node.js (www.nodejs.org)
6. Node Packaged Modules (www.npmjs.org)


If you want to run it locally you need to compile the website using `Jekyll`. It's pretty straightforward.

- [Jekyll - Installation](http://jekyllrb.com/docs/installation/)
- [Jekyll - Basic Usage](http://jekyllrb.com/docs/usage/)
- [Jekyll - Directory structure](http://jekyllrb.com/docs/structure/)


___
The `.css`files are compiled from the `'less'` files located in the `/less` folder.

If you want to manipulate the `css stylesheets` you should install `Grunt.js` and use it to compile the .less files into browser-friendly css. All of the dependencies are listed in the `/package.json` file.

Instructions: [Working with an existing Grunt project](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project)
___
When you BUILD the website with Jekyll this is what you should get.


`````
_SITE_COMPILED/
			|   .htaccess
			|   all-templates.html
			|   index.html
			|   sitemap.html
			|
			+---blog
			|   \---wp-content
			|       \---themes
			|           \---freetemplatesdownload
			|               \---includes
			|                       nav-dropdown-links.html
			|
			+---bootstrap
			|   +---css
			|   |       bootstrap.min.css
			|   |
			|   +---fonts
			|   |       glyphicons-halflings-regular.eot
			|   |       glyphicons-halflings-regular.svg
			|   |       glyphicons-halflings-regular.ttf
			|   |       glyphicons-halflings-regular.woff
			|   |
			|   \---js
			|           bootstrap.min.js
			|
			+---css
			|       global.css
			|
			+---ErrorDocuments
			|       403.html
			|       404.html
			|
			+---livepreview
			|   +---businessbox
			|   |   |   about.html
			|   |   |   contact.html
			|   |   |   features.html
			|   |   |   index.html
			|   |   |   services.html
			|   |   |
			|   |   \---css
			|   |           about.css
			|   |           contact.css
			|   |           services.css
			|   |           style.css
			|   |
			|   +---freshco
			|   |   |   index.html
			|   |   |
			|   |   \---css
			|   |           style.css
			|   |
			|   +---inspirator
			|   |   |   index.html
			|   |   |
			|   |   \---css
			|   |           style.css
			|   |
			|   +---pager
			|   |   |   index.html
			|   |   |
			|   |   \---css
			|   |           style.css
			|   |
			|   +---purity
			|   |   |   index.html
			|   |   |
			|   |   \---css
			|   |           style.css
			|   |
			|   +---urbanprism
			|   |   |   aboutus.html
			|   |   |   contacts.html
			|   |   |   index.html
			|   |   |   index2.html
			|   |   |
			|   |   \---css
			|   |           aboutus.css
			|   |           style.css
			|   |
			|   +---yourcoolportfolio
			|   |       index.html
			|   |       style.css
			|   |
			|   \---yourflatportfolio
			|           index.html
			|           style.css
			|
			\---template
			        businessbox.html
			        freshco.html
			        inspirator.html
			        pager.html
			        purity.html
			        urbanprism.html
			        yourcoolportfolio.html
			        yourflatportfolio.html
`````
___
For more information go to www.freetemplatesdownload.info