const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload')
const { src, dest, watch } = require('gulp')

let html = () => {
    return src("project/index.pug")
        .pipe(pug({pretty: true}))
        .pipe(dest("dist"))
        .pipe(livereload())
}

let html2 = () => {
    return src("project/pug/car-info.pug")
        .pipe(pug({pretty: true}))
        .pipe(dest("dist"))
        .pipe(livereload())
}
let css = () => {
    return src("project/css/sass/main.sass")
        .pipe(sass())
        .pipe(dest("dist/css"))
        .pipe(livereload())
}

// Car-Info Css
let carInfoCss = () => {
    return src("project/css/sass/car-info.sass")
        .pipe(sass())
        .pipe(dest("dist/css"))
        .pipe(livereload())
}

// Layout Css
let layoutCss = () => {
    return src("project/css/sass/layout.sass")
        .pipe(sass())
        .pipe(dest("dist/css"))
        .pipe(livereload())
}

let js = () => {
    return src("project/js/app.js")
        .pipe(dest("dist/js"))
        .pipe(livereload())
}

exports.default = () => {
    require('./server.js')
    livereload.listen()
    // Index.html
    watch('project/index.pug', html)
    watch('project/pug/*.pug', html)
    // Car-info.html
    watch('project/pug/car-info.pug', html2)
    watch('project/pug/*.pug', html2)
    // Main.css
    watch('project/css/**/*.sass', css)
    // Car-Info.css
    watch('project/css/sass/car-info.sass', carInfoCss)
    // Layout.css
    watch('project/css/sass/layout.sass', layoutCss)
    // App.js
    watch('project/js/app.js', js)
}