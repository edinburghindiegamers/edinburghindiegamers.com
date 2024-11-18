# Edinburgh Indie Gamers

This is the source code for the website for Edinburgh Indie Gamers.
Edinburgh Indie Gamers is a tabletop roleplaying club based in Edinburgh which specailises in indie roleplaying and story games.

Website hosted at https://edinburghindiegamers.com/

## Building the Site

We needed a website to host information about the Club and to serve as a simple blog for the Club to use.

To build this site, I used [MKDocs](https://github.com/mkdocs/mkdocs) and the [MKDocs Material](https://squidfunk.github.io/mkdocs-material/) theme.
It is hosted on GitHub Pages.

As most of our web content would not need frequent updates, a static site was sufficient for our needs.
I considered using other SSGs, such as Jekyll or Hugo.
However, these generators are to use because of widespread issues around deprecated or incompatible dependencies.
Their ecosystem, particularly when it comes to the development and maintenance of themes, is somewhat barren, and filled instead with themes that are old, incompatible, and no longer maintained.

MKDocs is far simpler to use, and is written in Python, a language with which I am more familiar (rather than Ruby or Go).
Despite its limitations, MKDocs should be sufficient for our needs.

My goal was to make a site that is easy enough to update through writing and editing Markdown files, leaving the rest of the structure and design undisturbed.
A static site should also be quicker and more responsive.

## Maintaining and Updating the Site

Most of the content on this site can be updated by editing the Markdown files in the `docs` directory of this repository.
For more notes on how to maintain the site, see [maintenance.md](maintenance.md).
The deployment of the site has been automated using GitHub Actions to automatically update after a new commit is pushed to the repo.
