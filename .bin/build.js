

// process.env.NODE_ENV = false;


const path      = require('path');
const fs        = require('grunt').file;
const chokidar  = require('chokidar');
const _         = require('lodash');
const Stylus    = require('stylus');
const CSSO      = require('csso')
const chalk     = require('chalk')

let DIST_DIR    = path.join(process.cwd(), 'dist');
let STYL_DIR    = path.join(process.cwd(), 'styl');
let CSS_DIR     = path.join(DIST_DIR, 'css');


compileStyles('get-this-party-started.styl');


let files = [
    path.join(STYL_DIR, '/**/*.styl')
];


chokidar
    .watch(files, {ignored: /(^|[\/\\])\../})
    .on('change', (filepath, filemeta) => {
        compileStyles(filepath);
    })
    ;



process.env.FILE_SERVER_PATH = './';
process.env.FILE_SERVER_PORT = 8080;


console.log(`Starting node fileserver at http://localhost:${process.env.FILE_SERVER_PORT}`);
require('node-file-server');


function compileStyles(filepath) {

    // skip no stylus files
    if (!filepath.match && !filepath.match(/\.styl$/)) { return; }

    let styles = fs.expand({ filter: 'isFile' }, [
            path.join(STYL_DIR, '**/*')
        ,   "!"+path.join(STYL_DIR, '**/_*')
        ]);

    _.each(styles, function(style) {
        let filename = path.basename(style)
                .replace(/\s+/, '-')
                .toLowerCase()
            ;

        let newStyle = path.join(CSS_DIR, filename.replace(/\.[\w\d]+/, ''));

        let content = fs.read(style);


        Stylus(content)
            .set('filename',    style)
            .set('paths',       [ STYL_DIR ])
            // .set('linenos',     process.env.NODE_ENV ? false : true)
            // .set('compress',    process.env.NODE_ENV ? true : false)
            .render(function(err, css) {

                if (err) {
                    console.error(chalk.red(err));
                    return;
                }

                // Write unminified styles to disk
                fs.write(`${newStyle}.css`, css);

                // POST PROCESS CSS A BIT
                css = css
                    .replace(/#__ROOT__/gi, ':root')
                    .replace(/PP__/gi, '--')
                    ;

                let csso_opts = {
                    debug:  process.env.NODE_ENV ? false : true
                // ,   c:      process.env.NODE_ENV ? true : false
                };

                css = CSSO.minify(css, csso_opts).css;


                // console.log(css);
                fs.write(`${newStyle}.min.css`, css);

                console.log(chalk.green(`> Compiled ${style}`));
            })
        ;

    });

}
