'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var merge = require('merge-stream');
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var historyApiFallback = require('connect-history-api-fallback');
var todo = require('gulp-todo');
var httpProxy = require('http-proxy');
var abspath = __dirname;

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

var styleTask = function(stylesPath, srcs) {
    return gulp.src(srcs.map(function(src) {
            return path.join('src', stylesPath, src);
        }))
        .pipe($.changed(stylesPath, {
            extension: '.css'
        }))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('.tmp/' + stylesPath))
        .pipe($.if('*.css', $.cssmin()))
        .pipe(gulp.dest('../capira-dist/dist/client/' + stylesPath))
        .pipe($.size({
            title: stylesPath
        }));
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {
    return styleTask('styles', ['**/*.css']);
});

gulp.task('elements', function() {
    return styleTask('elements', ['**/*.css']);
});

// Lint JavaScript
gulp.task('jshint', function() {
    return gulp.src([
            'src/client/scripts/**/*.js',
            'src/client/elements/**/*.js',
            'src/client/elements/**/*.html'
        ])
        .pipe(reload({
            stream: true,
            once: true
        }))
        .pipe($.jshint.extract()) // Extract JS from .html files
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function() {
    return gulp.src('src/client/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('../capira-dist/dist/client/images'))
        .pipe($.size({
            title: 'images'
        }));
});

// Copy All Files At The Root Level (src)
gulp.task('copy', function() {
    gulp.src([
        'src/client/static/**',
        '!src/client/test',
        '!src/client/precache.json'
    ]).pipe(gulp.dest('../capira-dist/dist/client/static'));
    gulp.src([
            'src/server/**',
        ])
        .pipe($.if('*.js', $.replace(/.\/src\/client/, './dist/client')))
        .pipe($.if('*.js', $.replace(/\/components\/endpoints/g, '')))
        .pipe(gulp.dest('../capira-dist/dist/server'));
    gulp.src([
        'package.json',
        'README.md',
    ]).pipe(gulp.dest('../capira-dist'));
    gulp.src([
        'src/client/components/endpoints/create/index.html', ,
    ]).pipe(gulp.dest('../capira-dist/dist/client/create'));
    gulp.src([
        'src/client/bower_components/katex/dist/**', ,
    ]).pipe(gulp.dest('../capira-dist/dist/client/bower_components/katex/dist'));
    gulp.src([
        'src/client/static/app/favicon.ico', ,
    ]).pipe(gulp.dest('../capira-dist/dist/client/'));

    gulp.src([
        'src/client/components/api/*', ,
    ]).pipe(gulp.dest('../capira-dist/dist/client/api'));
    /*
        var bower = gulp.src([
            'bower_components/** /*'
        ]).pipe(gulp.dest('../capira-dist/dist/client/bower_components'));

        var elements = gulp.src(['src/client/elements/** /*.html'])
            .pipe(gulp.dest('../capira-dist/dist/client/elements'));

        var swBootstrap = gulp.src(['bower_components/platinum-sw/bootstrap/*.js'])
            .pipe(gulp.dest('../capira-dist/dist/client/elements/bootstrap'));

        var swToolbox = gulp.src(['bower_components/sw-toolbox/*.js'])
            .pipe(gulp.dest('../capira-dist/dist/client/sw-toolbox'));

        var vulcanized = gulp.src(['src/client/elements/elements.html'])
            .pipe($.rename('elements.vulcanized.html'))
            .pipe(gulp.dest('../capira-dist/dist/client/elements'));

        return merge(src, bower, elements, vulcanized, swBootstrap, swToolbox)
            .pipe($.size({
                title: 'copy'
            }));
    */
});



// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function() {
    var assets = $.useref.assets({
        searchPath: ['.tmp', 'src', '../capira-dist/dist']
    });

    return gulp.src(['src/client/**/*.html', '!src/client/{elements,test}/**/*.html'])
        // Replace path for vulcanized assets
        .pipe($.if('*.html', $.replace('elements/elements.html', 'elements/elements.vulcanized.html')))
        .pipe(assets)
        // Concatenate And Minify JavaScript
        .pipe($.if('*.js', $.uglify({
            preserveComments: 'some'
        })))
        // Concatenate And Minify Styles
        // In case you are still using useref build blocks
        .pipe($.if('*.css', $.cssmin()))
        .pipe(assets.restore())
        .pipe($.useref())
        // Minify Any HTML
        .pipe($.if('*.html', $.minifyHtml({
            quotes: true,
            empty: true,
            spare: true
        })))
        // Output Files
        .pipe(gulp.dest('../capira-dist/dist'))
        .pipe($.size({
            title: 'html'
        }));
});

// Vulcanize imports
gulp.task('vulcanize', function() {
    var DEST_DIR = '../capira-dist/dist/client/elements';

    return gulp.src('../capira-dist/dist/client/elements/elements.vulcanized.html')
        .pipe($.vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe(gulp.dest(DEST_DIR))
        .pipe($.size({
            title: 'vulcanize'
        }));
});

// Generate a list of files that should be precached when serving from '../capira-dist/dist'.
// The list will be consumed by the <platinum-sw-cache> element.
gulp.task('precache', function(callback) {
    var dir = '../capira-dist/dist';

    glob('{elements,scripts,styles}/**/*.*', {
        cwd: dir
    }, function(error, files) {
        if (error) {
            callback(error);
        } else {
            files.push('index.html', './', 'bower_components/webcomponentsjs/webcomponents-lite.min.js');
            var filePath = path.join(dir, 'precache.json');
            fs.writeFile(filePath, JSON.stringify(files), callback);
        }
    });
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', '../capira-dist/dist']));

// Watch Files For Changes & Reload
gulp.task('serve', [], function() {
    var proxy = httpProxy.createProxyServer();
    browserSync({
        notify: false,
        logPrefix: 'CAPIRA',
        snippetOptions: {
            rule: {
                match: '<span id="browser-sync-binding"></span>',
                fn: function(snippet) {
                    return snippet;
                }
            }
        },
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        // proxy: 'localhost:9898',
       // proxy: 'localhost:9898',

     
        server: {
            baseDir: 'src',
            directory: true,
            routes: {
                '/bower_components': 'bower_components',
                '/showcase': 'showcase',
                '/static': 'static',
            }
        }
        
    });

    gulp.watch(['src/client/**/*.html'], reload);
    gulp.watch(['src/client/styles/**/*.css'], ['styles', reload]);
    gulp.watch(['src/client/elements/**/*.css'], ['elements', reload]);
    gulp.watch(['src/client/{scripts,elements}/**/*.js'], ['jshint']);
    gulp.watch(['src/client/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function() {
    browserSync({
        notify: false,
        logPrefix: 'CAPIRA',
        snippetOptions: {
            rule: {
                match: '<span id="browser-sync-binding"></span>',
                fn: function(snippet) {
                    return snippet;
                }
            }
        },
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: '../capira-dist/dist',
        middleware: [historyApiFallback()]
    });
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function(cb) {
    runSequence(
        ['copy', 'styles'],
        'elements', ['jshint', 'images', 'fonts', 'html'],
        'vulcanize',
        cb);
    // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
try {
    require('require-dir')('tasks');
} catch (err) {}



var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var inlinesource = require('gulp-inline-source');
var clean = require('gulp-clean');

/*
 *  to support polymer special css syntax you need to have installed the master of clean-css
 *       "clean-css": "jakubpawlowicz/clean-css#master"
 *   a hack is to type it into /node_modules/gulp-minify-inline/package.json
 *  maybe it works in our package too. it is added but not tested.
 *
 */
gulp.task('vulcan', function() {
    var DEST_DIR = '../capira-dist/dist/client/player';
    return gulp.src('src/client/components/endpoints/player/elements/elements.html')
        .pipe($.vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true,
            excludes: ['/src/client/bower_components/katex/dist/katex.min.js'],
            stripExcludes: ['/src/client/bower_components/iron-icons/iron-icons.html']
        }))
        .pipe(minifyHTML())
 //       .pipe(minifyInline({
   //         css: {
     //           advanced: false
       //     }
        //}))
        .pipe(gulp.dest(DEST_DIR))
        .pipe($.size({
            title: 'vulcanize'
        }));
});



gulp.task('inline-scripts', function() {
    return gulp.src('src/client/components/endpoints/player/index.html')
        .pipe(inlinesource())
        .pipe($.if('*.html', $.replace('elements/elements.html', 'elements.html')))
        .pipe(gulp.dest('../capira-dist/dist/client/player/'));
});


gulp.task('clean-index', function() {
    return gulp.src('../capira-dist/dist/client/player/index.html')
        .pipe(inlinesource())
        .pipe($.if('*.html', $.minifyHtml({
            quotes: true,
            empty: true,
            spare: true,
        })))
       // .pipe(minifyInline())
        .pipe(gulp.dest('../capira-dist/dist/client/player/'));
});


gulp.task('build-player', function(cb) {
    runSequence(
        ['vulcan'], ['inline-scripts'], ['clean-index'],
        cb);
    // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

//TODO: Parse todos in inline-js
//TODO: Parse optional priorities, milestones, etc
//TODO: Make diffs, collect history in git
//TODO: Build Todo-List on the fly with watch task (every 5 minutes?) commit changes automatically?
//TODO: Parameter for todo-list to print personal todo-list?
//TODO: dynamic output in shell instead of a file? filter with regex? todo-command-linetool?
var argv = require('yargs').argv;
var query = (argv.query === undefined) ? '' : argv.query;
gulp.task('todo', function() {
    gulp.src(['**/*.js', '**/*.html', '!bower_components/**/*', '!node_modules/**/*']) //
        .pipe(todo())
        .pipe(gulp.dest('./'));
    // -> Will output a TODO.md with your todos
});







/*
 *  Editor
 *
 */



gulp.task('editor-vulcan', function() {
    var DEST_DIR = '../capira-dist/dist/client/editor';
    return gulp.src('src/client/components/endpoints/editor/elements/elements.html')
        .pipe($.vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true,
            excludes: ['/src/client/bower_components/katex/dist/katex.min.js'],
            stripExcludes: ['/src/client/bower_components/iron-icons/iron-icons.html']
        }))
        .pipe(gulp.dest(DEST_DIR))
        .pipe($.size({
            title: 'editor-vulcan'
        }));
});


gulp.task('editor-inline-scripts', function() {
    return gulp.src('src/client/components/endpoints/editor/index.html')
        .pipe(inlinesource())
        .pipe($.if('*.html', $.replace('elements/elements.html', 'elements.html')))
        .pipe(gulp.dest('../capira-dist/dist/client/editor/'));
});


gulp.task('editor-clean-index', function() {
    return gulp.src('../capira-dist/dist/client/editor/index.html')
        .pipe(inlinesource())
        .pipe($.if('*.html', $.minifyHtml({
            quotes: true,
            empty: true,
            spare: true,
        })))
       // .pipe(minifyInline())
        //.pipe($.if('*.html', $.replace('</body></html>', '<script>function bugfix(){setTimeout(function(){if(!document.getElementById("overlay1")){bugfix();}else{document.getElementById("overlay1").opened||app.openedOverlay=0;app.showOverlay(1)}},300)};bugfix();</script></body></html>')))
        .pipe(gulp.dest('../capira-dist/dist/client/editor/'));
});

gulp.task('editor-clean-vulcanized', function() {
    return gulp.src('../capira-dist/dist/client/editor/elements.html')
        .pipe(inlinesource())
        .pipe($.if('*.html', $.minifyHtml({
            quotes: true,
            empty: true,
            spare: true,
        })))
   //     .pipe(minifyInline({
   //         css: {
   //             advanced: false
   //         }
   //     }))
        .pipe(gulp.dest('../capira-dist/dist/client/editor/'))
        .pipe($.size({
            title: 'minified elements'
        }));
});


gulp.task('build-editor', function(cb) {
    runSequence(
        ['editor-vulcan', 'editor-inline-scripts'], ['editor-clean-vulcanized'],
        cb);
    // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

gulp.task('build', function(cb) {
    runSequence(
        ['build-editor', 'build-player', 'copy'],
        cb);
    // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

var polybuild = require('polybuild');

gulp.task('build-1', function() {
    return gulp.src('src/client/endpoints/editor/elements/elements.html')
        .pipe(polybuild({
            maximumCrush: true
        }))
        .pipe(gulp.dest('../capira-dist/dist/client/editor/2'));
});

var flatten = require('gulp-flatten');
var filenames = require('gulp-filenames');

gulp.task('copy-tests', function() {
    var bower = gulp.src([
            'bower_components/**/webcomponents-lite.js',
            'bower_components/**/webcomponents.min.js',
            'bower_components/**/browser.js',
            'bower_components/**/test-fixture.html',
            'bower_components/**/test-fixture-mocha.js',
            'bower_components/**/mock-interactions.js',
            'bower_components/**/parsing.js',
            'bower_components/**/formatting.js',
            'bower_components/**/async.js',
            'bower_components/**/normalization.js',
            'bower_components/**/lodash.js',
            'bower_components/**/mocha.js',
            'bower_components/**/mocha.css',
            'bower_components/**/chai.js',
            'bower_components/**/sinon.js',
            'bower_components/**/sinon-chai.js',
            'bower_components/**/axs_testing.js',
            'bower_components/**/a11ySuite.js',
            'bower_components/**/polymer.html',
            'bower_components/**/test-helpers.js',
        ])
        .pipe(gulp.dest('../capira-dist/dist/client/bower_components/'));


    var demos = gulp.src(['src/client/**/demo/*.html'])
        .pipe($.if('*.html', $.replace(/<!-- build:js[^]* endbuild -->/, '<link rel="import" href="/editor/elements.html">')))
        .pipe($.if('*.html', $.replace(/<link rel="import" href="..\/(.*)..\/overlays\/demo\/demo-init.html">/, '<link rel="import" href="../overlay/demo/demo-init.html">')))
        .pipe(flatten({
            includeParents: -2
        }))
        .pipe(gulp.dest('../capira-dist/dist/client/editor-test/'));

    var demosPlayer = gulp.src(['src/client/**/demo/*.html', '!src/client/**/socratic-single-answer-quiz-editor/**/demo/*.html'])
        .pipe($.if('*.html', $.replace(/<!-- build:js[^]* endbuild -->/, '<link rel="import" href="/player/elements.html">')))
        .pipe($.if('*.html', $.replace(/<link rel="import" href="..\/(.*)..\/overlays\/demo\/demo-init.html">/, '<link rel="import" href="../overlay/demo/demo-init.html">')))
        .pipe(flatten({
            includeParents: -2
        }))
        .pipe(gulp.dest('../capira-dist/dist/client/player-test/'));
    var testsPlayer = gulp.src('src/client/**/test/*.html')
        .pipe($.if('*.html', $.replace(/<!-- build:js[^]* endbuild -->/, '<link rel="import" href="/player/elements.html">')))
        .pipe(flatten({
            includeParents: -2
        }))
        .pipe(gulp.dest('../capira-dist/dist/client/player-test/'));
    var htaccess = gulp.src('static/tests/.htaccess')
        .pipe(gulp.dest('../capira-dist/dist/client/editor-test/'))
        .pipe(gulp.dest('../capira-dist/dist/client/player-test/'));
});


gulp.task('fetch-tests', function() {

    gulp.src('src/client/**/test/*.html')
        .pipe($.if('*.html', $.replace(/<!-- build:js[^]* endbuild -->/, '<link rel="import" href="/editor/elements.html">')))
        .pipe(flatten({
            includeParents: -2
        }))
        .pipe(gulp.dest('../capira-dist/dist/client/editor-test/'));
    return gulp.src('src/client/**/test/index.html')
        .pipe(flatten({
            includeParents: -2
        }))
        .pipe(filenames('testpaths'));
});
gulp.task('print-tests', function() {
    gulp.src('static/tests/all.html')
        .pipe($.if('*.html', $.replace('/* tests */', JSON.stringify(filenames.get('testpaths')))))
        .pipe(gulp.dest('../capira-dist/dist/client/editor-test/'));
});

gulp.task('build-tests', function(cb) {
    runSequence(
        ['copy-tests', 'fetch-tests'], ['print-tests'],
        cb);
    // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});








/*** *** *** *** *** ***/
/*    Player Tests     */
/*** *** *** *** *** ***/



gulp.task('fetch-player-tests', function() {
    //Todo: exclude editor tests from player
    return gulp.src(/^((?!(-editor)).)*test\/index.html$/g)
        .pipe(filenames('playerpaths'));
});

gulp.task('print-player-tests', function() {
    gulp.src('static/tests/all.html')
        .pipe($.if('*.html', $.replace('/* tests */', JSON.stringify(filenames.get('playerpaths')))))
        .pipe($.rename('_test-player.html'))
        .pipe(gulp.dest('src/client/'));
});

gulp.task('local-player-tests', function(cb) {
    runSequence(
        ['fetch-player-tests'], ['print-player-tests'],
        cb);
});



/*** *** *** *** *** ***/
/*    Editor Tests     */
/*** *** *** *** *** ***/


gulp.task('fetch-editor-tests', function() {
    return gulp.src('src/client/**/test/index.html')
        .pipe(filenames('editorpaths'));
});

gulp.task('print-editor-tests', function() {
    gulp.src('static/tests/all.html')
        .pipe($.if('*.html', $.replace('/* tests */', JSON.stringify(filenames.get('editorpaths')))))
        .pipe($.rename('_test-editor.html'))
        .pipe(gulp.dest('src/client/'));
});

gulp.task('local-editor-tests', function(cb) {
    runSequence(
        ['fetch-editor-tests'], ['print-editor-tests'],
        cb);
});

/*** *** *** *** *** ***/
/*    All Tests        */
/*** *** *** *** *** ***/

gulp.task('local-tests', function(cb) {
    runSequence(
        ['local-player-tests', 'local-editor-tests'],
        cb);
});
