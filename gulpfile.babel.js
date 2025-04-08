import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import { server } from './gulp/tasks/server.js';
import config from './gulp/config.js';
import runDjango from './gulp/tasks/django.js';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';

config.setEnv();

export const build = gulp.series(
    clean,
    htmlBuild,
    sassBuild,
    scriptsBuild,
    assetsBuild
);

export const watch = gulp.series(
    build,
    gulp.parallel(
        runDjango,
        server,
        htmlWatch,
        sassWatch,
        scriptsWatch,
        assetsWatch
    )
);

gulp.task('img:dev', function () {
    return (
        gulp
            .src([`${paths.src.img}/**/*`, '!./src/img/svgicons/**/*'])
            // .pipe(imagemin({ verbose: true }))
            .pipe(gulp.dest(`${paths.dest.img}`))
    );
});


gulp.task("watch:files", function () {
  gulp.watch(`${paths.src.img}/**/*`, gulp.series("img:dev"));
  gulp.watch("./**/*.py", gulp.series("reload"));
});

