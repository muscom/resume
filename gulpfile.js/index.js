// common
const { src, dest, watch, series, parallel } = require('gulp');
const replace = require('gulp-replace');
const env = require('node-env-file');
const fs = require('fs');

// sass
const gulp_sass = require('gulp-sass')(require('sass'));
const gulp_sass_glob = require('gulp-sass-glob');
const packageImporter = require('node-sass-package-importer');

// pug
const gulp_pug = require('gulp-pug');

// server
const { reload } = require('browser-sync');
const browserSync = require('browser-sync').create();

// associate extensions with file types
const tasks = {
    images: {
        ext: {
            allow: [
                './src/**/*.jpg',
                './src/**/*.jpeg',
                './src/**/*.png',
                './src/**/*.gif',
            ],
            deny: [],
        },
    },
    sass: {
        ext: {
            allow: ['./src/**/*.scss', './src/**/*.sass', './src/**/*.css'],
            deny: [],
        },
    },
    pug: {
        ext: {
            allow: ['./src/**/*.pug', './src/**/*.html'],
            deny: ['./src/**/_*.pug', './src/**/_*.html'],
        },
    },
    src: (type) => {
        return tasks[type].ext.allow;
    },
};

// tasks

// env
env('.env');

// images
function transport_images() {
    return src(tasks.src('images')).pipe(dest('./dist/'));
}
exports.images = series(transport_images);

// sass
function compile_sass() {
    return src(tasks.src('sass'))
        .pipe(gulp_sass_glob())
        .pipe(
            gulp_sass({
                importer: packageImporter({
                    extensions: ['.scss', '.css'],
                }),
                outputStyle: 'expanded',
            }).on('error', gulp_sass.logError)
        )
        .pipe(replace('/src/', '/'))
        .pipe(dest('./dist/'));
}
exports.sass = series(compile_sass);

// pug
function compile_pug() {
    const content = JSON.parse(fs.readFileSync('./src/.data/content.json'));
    const locale = JSON.parse(fs.readFileSync('./src/assets/data/locale.json'));
    return src(['./src/**/*.pug', '!./src/**/_*.pug'])
        .pipe(
            gulp_pug({
                basedir: '.',
                pretty: true,
                locals: {
                    env: process.env,
                    content: content,
                    locale: locale,
                },
            })
        )
        .pipe(replace('/src/', '/'))
        .pipe(dest(['./dist/']));
}
exports.pug = series(compile_pug);

// server
// build
function build_server(done) {
    browserSync.init({
        server: {
            baseDir: './dist/',
        },
    });
    done();
}
// reload
function reload_server(done) {
    browserSync.reload();
    done();
}
// watch
function watch_file_change() {
    watch(
        ['./src/**/*.scss', './src/**/*.pug'],
        series(compile_pug, compile_sass, reload_server)
    );
}

// develop
exports.default = series(
    parallel(compile_pug, compile_sass, transport_images),
    build_server,
    watch_file_change
);
