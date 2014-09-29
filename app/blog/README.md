# Explanation

The blog directory here represents http://freetemplatesdownload.info/blog .
The actual blog of the website is not powered by Jekyll but it's powered by WordPress instead.

The directory `/blog` is here because it is used by Jekyll to [generate a file](https://github.com/LubomirGeorgiev/freetemplatesdownload.info/blob/master/app/blog/wp-content/themes/freetemplatesdownload/includes/nav-dropdown-links.html) which contains the links to all templates. Then this file is included in the blog's navigation menu via `PHP include`.
