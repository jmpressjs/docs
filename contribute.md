# Contribute

We are always looking for more contributors and there are many ways you can help!

* Open an [issue](https://github.com/jmpressjs/jmpress.js/issues) for a bug or a feature request
* Send us a message if you're using jmpress.js
* Add/update the test cases
* Fix a bug or write a feature then submit a pull request

Thank you for using and contributing to jmpress.js!

## Edit & Build

### Quickly

* Install [Node.js](http://nodejs.org/) and [git](http://git-scm.com/).
* Install [Grunt](http://gruntjs.com): `npm install grunt-cli -g`.
* Clone the dev branch of jmpress.js: `git clone -b dev git://github.com/jmpressjs/jmpress.js.git && cd jmpress.js`.
* Run `npm install` to install the development dependencies.
* Finally run `grunt` to build.

### Longer Build Explanation

All the source files are located in the `src/` folder. They are broken up into components and plugins to allow users to build their own [customized version](http://jmpressjs.github.com/customize) of jmpress.js.

#### Grunt

We use the command line build tool: [grunt](https://github.com/gruntjs/grunt). It requires Node.js. If you already have Node.js installed, navigate to your copy of jmpress.js and run the command: `npm install` to install any development dependencies. It is recommended to install the grunt command globally with `npm install grunt-cli -g`.

Then navigate to your copy of jmpress.js and run the command: `grunt` (windows: `grunt.cmd`) to build. You can also use the command `grunt watch` to continuously build jmpress.js as you edit.

The output files will be located in the `dist/` folder. Please do not edit any file in this folders as they are automatically generated. You can delete them and they will be regenerated.

#### Testing

jmpress.js uses [QUnit](http://docs.jquery.com/QUnit) for testing. Please run `/tests/` in your browser to run the tests or the command: `grunt qunit`.

*Currently the tests need a lot of catching up. Any help you can provide will be very much appreciated.*

## Pull Requests

Good news! We accept pull requests!

Please work and pull against the `dev` branch to make sure you are using the latest code. Thanks!

## Docs

If you find an error or something missing please edit and submit a pull request.
There is an **Edit This Page** button in the top right corner.
