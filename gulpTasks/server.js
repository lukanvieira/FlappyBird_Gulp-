const { src, series } = require('gulp')
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => series('appHTML')())
    watch('src/**/*.css', () => series('appCSS')())
    watch('src/**/*.js', () => series('appJS')())
    watch('src/assets/imgs/*.*', () => series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}