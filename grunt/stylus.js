
var stylus = {
      src: "<%= testsDir %>/stylus/_test.styl"

    , destDev:    "<%= testsDir %>/stylus/title-belt.css"
    , destBuild:  "<%= testsDir %>/stylus/title-belt.min.css"

    , imports: [
        "<%= testsDir %>/_test.styl"
      ]
    }
  ;

module.exports = {
  dev: {
    options: {
      compress: false
    , linenos: true
    // , import: stylus.imports
    }
  , src: stylus.src
  , dest: stylus.destDev
  }

, build: {
    options: {
      // import: stylus.imports
    }
  , src: stylus.src
  , dest: stylus.destBuild
  }
};
