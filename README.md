# generator-rework

[![Build Status](https://secure.travis-ci.org/johnotander/generator-rework.png?branch=master)](https://travis-ci.org/johnotander/generator-rework)

A minimal yeoman generator for a web project using gulp, rework, and autoprefixer.

This generator prompts you for your:

* Name
* Github username
* Twitter username
* Project name
* Project description

Using the information to create a project with the following structure:

```
awesome-project/
- css/
-   src/
-     all.css
-   c.css
- .editorconfig
- .gitignore
- index.html
- gulpfile.js
- LICENSE.md
- package.json
- README.md
```

## Installation

```bash
npm install -g generator-rework
```

## Usage

```bash
yo p
```

You will then be prompted for some information that will be used to generate a rework project.

#### Get up and running

After running the generator:

```
cd project-name
npm install
gulp
open index.html
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
