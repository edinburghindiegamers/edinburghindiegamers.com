# edinburghindiegamers.com Maintenance Guide

This is a guide on how to maintain the EIG website.
This will give a brief overview of the relevant packages, and will outline basic steps on how to edit content on the site.

## Assumed Knowledge

This guide assumes you are familiar with:

- Git
- Using GitHub
- Writing Markdown files
- `.yml` syntax
- `html`

All of these are fairly easy to pick up, so it shouldn't be too hard to pick it up if you're not already au fait.

## General Structure

- The website was built using [MKDocs](https://github.com/mkdocs/mkdocs) and the [MKDocs-Material](https://github.com/squidfunk/mkdocs-material) theme.
  You can find the relevant documentation [here](https://squidfunk.github.io/mkdocs-material/).
- The website also uses the following optional plugins (installed via `pip`):
  - `mkdocs-material-extensions`
  - `mkdocs-git-revision-date-localized-plugin`
  - `mkdocs-git-committers-plugin-2`
  - `mkdocs-rss-plugin`
  - `pillow`
  - `cairosvg`
- MKDocs is designed to serve static documentation for code.
  Some page templates needed to be customised to serve our content better, including:
  - `index.md` To get a custom landing page,
  - `zine/index.md` For a custom page to link to the zine, along with the graphics.
- All pages that are rendered on the web site are contained in the `docs` directory.
  Everything else is the `includes` and `overrides` directories are just files required for the customisation and building of the site.
- The directory structure in `docs` reflects the page structure of the site.
  However, nav menus are not generated automatically and will need to be configured separately in the `mkdocs.yml` file.

It would be a good idea to clone this repo locally, install `MKDocs`, and tinker with it locally before trying to commit changes.

## Common Tasks

### Adding/Editing Pages

- To add or edit pages, simply write or edit a `<page>.md` file and place it in the `docs` directory in an appropriate filepath.
- Then, edit the `nav` parameter in the `mkdocs.yml` file to add the link to the page in the navigation menu.
- Committing changes and pushing them to the `main` branch of the repo will automatically re-build the site.
- For the pages above mentioned which have a custom template, only their content can be edited from the Markdown files.
Changing their layout will need changing their template files.

### Adding/Editing Blog Posts

Blog posts can be written using the same method as above.
The only difference is that there are a few additional steps to writing a blog.

#### Define authors:

In the `blog/authors.yml` file, add an author using the following format:

```yml
# blog/authors.yml
authors:
  <identifier>:
    name: <author name>
    description: <description/role>
    avatar: <url to avatar>
```
#### Add metadata to the post

When you create a new post file (`<yyyy-mm-dd>-post.md`), at the top of the file include the following `yml` frontmatter (adding relevant information where necessary):

```md
<!-- <yyyy-mm-dd>-post.md> -->
---
date: <yyyy-mm-dd>
authors:
  - <identifier from blog/authors.yml>
categories:
  - <category>
tags:
  - <tag>
---

# <title>
```

#### Write

Write the post as if it were a regular Markdown file thereafter.

### Adding site-wide alerts

To add any site-wide notices (which will be displayed in a banner on top of every page until dismissed), just add the `html` for the alert to `overrides/partials/notice.html`.

## Editing from GitHub Directly

You can edit files and make commits from GitHub directly if you have write access to the repo.
However, I would advise against it you won't be able to preview the site as you edit, and every commit saved will lead to the site being re-built.
But if you know what you're doing, the option is there.
You can follow the edit link on each page to edit them on GitHub.
