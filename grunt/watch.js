
module.exports = {
  js: {
    options: {
      spawn: false
    },
    files: [
      "js/**.js"
    ],
    tasks: [
      "jshint", "jsonlint"
    ]
  }

, styl: {
    options: {
      spawn: false
    },
    files: [
      "stylus/**/*.styl"
    , "tests/**/*.styl"
    ],
    tasks: [
      "stylus:dev"
    ]
  }

, json: {
    options: {
      spawn: false
    },
    files: [
      "**.json"
    ],
    tasks: [
      "jsonlint"
    ]
  }
};
