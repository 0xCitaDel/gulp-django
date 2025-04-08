import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import { server } from './gulp/tasks/server.js';
import config from './gulp/config.js';
import runDjango from './gulp/tasks/django.js';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';

config.setEnv();

export const build = gulp.series(
    clean,
    htmlBuild,
    sassBuild,
    scriptsBuild
);

export const watch = gulp.series(
    build,
    gulp.parallel(
        runDjango,
        server,
        htmlWatch,
        sassWatch,
        scriptsWatch
    )
);

const fs = require("fs");
const path = require("path");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const { groupCollapsed } = require("console");

const paths = {
    src: {
        root: "./",
        html: "./assets/html",
        scss: "./assets/scss",
        img: "./assets/img"
    },
    dest: {
        html: "./src/templates",
        css: "./src/static/css",
        img: "./src/static/img",
    }
};


gulp.task("scss:dev", function () {
    return gulp
    .src(paths.src.scss + "/**/*.scss")
    .pipe(wait(500))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
        cascade: false,
        grid: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream());
});

gulp.task('img:dev', function () {
    return (
        gulp
            .src([`${paths.src.img}/**/*`, '!./src/img/svgicons/**/*'])
            // .pipe(imagemin({ verbose: true }))
            .pipe(gulp.dest(`${paths.dest.img}`))
    );
});

gulp.task("minify:css", function () {
  return gulp
    .src([paths.dest.css + "/style.css"])
    .pipe(cleanCss())
    .pipe(
      rename(function (path) {
        path.extname = ".min.css";
      })
    )
    .pipe(gulp.dest(paths.dest.css));
});


gulp.task("watch:files", function () {
  gulp.watch(`${paths.src.html}/**/*.html`, gulp.series("html:dev", "reload"));
  gulp.watch(`${paths.src.scss}/**/*.scss`, gulp.series("scss:dev", "reload"));
  gulp.watch(`${paths.src.img}/**/*`, gulp.series("img:dev"));
  gulp.watch("./**/*.py", gulp.series("reload"));
});

