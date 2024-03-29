## MVP TASKS DONE
* Music portfolio

## MVP TASKS TO DO
* ~Design band landing page
* ~Make band pages for Pilgrims, Hope Bombs
* ~ Design theatre landing page
* ~ Design classical landing page
* ~ Figure out how to link to YouTube
* ~ Add LinkedIn to social sharing buttons
* ~ Fix and upload songs for Hope Bombs
* ~ Make all music landing pages
* ~ Write and edit meta descriptions
* ~ Populate new music section
* ~ Make or obtain PDFs for new music
* ~ Populate tech section
* ~ Create crossover section, or just dump it
* ~ Create tech page
* ~ Set up comments
* Design rock theory blog page
  - ~ center blog images on home page
  - ~ fix images on main blog page
  - ~ how do people ever get to main blog page?
  - ~ insert link in each blog post to main blog page
  - ~ remove sample blog entries
  - fix up existing posts
* ~ Include rock theory example CSS
* ~ Upload 1-2 rock theory articles
* ~ Google Analytics

## MORE TASKS
* ~Make email submitting script
* ~ Check analytics
* ~ Move audio samples to benmorss.com
* ~Set up Netlify to compress, minify, etc
* ~ Compress images
* Make band page for Big Lie Department
* Make band page for Teen Satan
* Upload songs for Teen Satan
* Include demos for classical music
* Upload songs for Pilgrims

## TODO:
* Make title for home page not repeat "Ben Morss"
* Why does menu get stuck open on mobile?

### Tech page
* Use the slick carousel that's built in.

### Useful links:
* [Front matter](https://gohugo.io/content-management/front-matter/)
* [Page-level params](https://gohugo.io/variables/page/#page-level-params)
* [Meghna on github](https://github.com/themefisher/meghna-hugo)
* [Functions](https://gohugo.io/functions/index-function/)
* [Themify icons](https://themify.me/themify-icons)
* [Hugo Template Conditionals](https://forestry.io/blog/demystifying-hugo-conditionals/)
* [CSS dead code eliminator for Go](https://github.com/client9/csstool)
* [MacOS keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* [Basic editing in VSCode](https://code.visualstudio.com/docs/editor/codebasics)
* [Great explanation about finding templates](https://stackoverflow.com/questions/71031296/hugo-change-layout)


### Making a landing page
* Take a layout from main page layouts... skills seems as promising as any. Just simplify that down to a two-column layout where one side has a photo and a player embed, and the other has text.
* Put that in an html page like layouts/_default/article.html. Seems like that manages to include the navigation, head partials etc as defined by other HTML files in that dir.
* Make a markdown file in a place like content/music, just like we have content/blog. I'm not sure how to tell that which layout to use.