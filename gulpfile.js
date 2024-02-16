const gulp = require('gulp');
const sass =require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')

function comprimeJS() {
    return gulp.src('./javascript./*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
}

function CompilaSass() {
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
}

function ComprimImagens() {
    return gulp.src('./imagens/*')
    .pipe(imagemin())
    .pipe (gulp.dest('./');
}

exports.default = function () {
    gulp.watch('./imagens/*'), {ignoreInitial: false}, gulp.series(ComprimImagens);
    gulp.watch('./scss/*.scss'), {ignoreInitial: false}, gulp.series(CompilaSass);
    gulp.watch('./javascript./*.js'), {ignoreInitial: false}, gulp.series(comprimeJS);

}