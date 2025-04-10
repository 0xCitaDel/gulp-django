import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import { server } from './gulp/tasks/server.js';
import config from './gulp/config.js';
import { runDjango } from './gulp/tasks/django.js';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';

config.setEnv();

export const build = gulp.series(
    clean,
    gulp.parallel(
        htmlBuild,
        sassBuild,
        scriptsBuild,
        assetsBuild,
        imagesBuild,
        spritesBuild
    )
);

export const watch = gulp.series(
    build,
    gulp.parallel(
        runDjango,
        server,
        htmlWatch,
        sassWatch,
        scriptsWatch,
        assetsWatch,
        imagesWatch,
        spritesWatch
    )
);
