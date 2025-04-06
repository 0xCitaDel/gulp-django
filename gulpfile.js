const autoprefixer = require("gulp-autoprefixer").default;
const browserSync = require("browser-sync").create();
const cleanCss = require("gulp-clean-css");
const del = require("del");
const fs = require("fs");
const gulp = require("gulp");
const path = require("path");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const spawn = require("child_process").spawn;
const wait = require("gulp-wait");
const { groupCollapsed } = require("console");

const paths = {
    src: {
        root: "./",
        html: "./assets/html",
        scss: "./assets/scss",
    },
    dest: {
        html: "./src/templates",
        css: "./src/static/css",
    }
};

gulp.task('html:dev', function () {
    return gulp
        .src(paths.src.html + '/**/*.html', { base: paths.src.html })
        .pipe(gulp.dest(paths.dest.html))
        .pipe(browserSync.stream());
});


gulp.task("scss:dev", function () {
    return gulp
    .src(paths.src.scss + "/**/*.scss")
    .pipe(wait(500))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
        autoprefixer({
        overrideBrowserslist: ["> 1%"],
        })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream());
});

gulp.task("minify:css", function () {
  return gulp
    .src([paths.dest.css + "/style.css"])
    .pipe(cleanCss())
    .pipe(
      rename(function (path) {
        // Updates the object in-place
        path.extname = ".min.css";
      })
    )
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task("reload", function () {
    browserSync.reload();
    done();
});

gulp.task("run:django", function (cb) {
  const cmd = spawn("poetry", ["run", "python3", "src/manage.py", "runserver", "0.0.0.0:8000"], {
    stdio: "inherit",
  });
  cmd.on("close", function (code) {
    console.log("Django application exited with code " + code);
    cb(code);
  });
});

gulp.task("browser:sync", function (cb) {
  browserSync.init({
    port: 3000,
    proxy: "localhost:8000",
    open: false,
    reloadDelay: 300,
    reloadDebounce: 500,
  });
  cb();
});

gulp.task("watch:files", function () {
  gulp.watch(`${paths.src.html}/**/*.html`, gulp.series("html:dev", "reload"));
  gulp.watch(`${paths.src.scss}/**/*.scss`, gulp.series("scss:dev", "reload"));
  gulp.watch("./**/*.py", gulp.series("reload"));
});

gulp.task("default", gulp.parallel("run:django", "browser:sync", "watch:files"));

