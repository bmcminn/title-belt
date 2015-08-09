var path    = require('path')
  , config = {
      port: 3005
    , hostname: "localhost"
    , devbase: "./tests"
    , index: "test.php"
    , errorlogs: "logs/error.log"
    // , buildbase: "./build"
    }
  ;



module.exports = {
  dev: {
    options: {
      port: config.port
    , keepalive: true
    , hostname: config.hostname
    , base: config.devbase
    , router: config.index
    , directives: {
        error_log: path.resolve(config.devbase, config.errorlogs)
      , log_errors: 1
      , display_errors: 1
      }
    }
  }

  // , build: {
  //     options: {
  //       port: config.port
  //     , keepalive: true
  //     , hostname: config.hostname
  //     , base: config.buildbase
  //     , router: "index.php"
  //     , directives: {
  //         error_log: path.resolve(config.buildbase, config.errorlogs)
  //       , log_errors: 1
  //       }
  //     }
  //   }
};
