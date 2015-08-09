
// TODO: configure LESS task: https://github.com/gruntjs/grunt-contrib-less

module.exports = {
  dev: {
    options: {
      compress: false
    , linenos: true
    , import: [
        '_colors.styl'
      ]
    }
  , src: "public/stylus/**.styl"
  , dest: "public/css/main.css"
  }

, build: {
    options: {
      import: [
        '_colors.styl'
      , 'title-belt/_mixins.styl'
      ]
    }
  , src: "public/stylus/**.styl"
  , dest: "test/css/main.css"
  }
};
