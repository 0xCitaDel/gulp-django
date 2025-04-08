import gulp from 'gulp';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import plumber from 'gulp-plumber';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';
import cssnano from 'cssnano';
import rename from 'gulp-rename';

import config from '../config.js';
import { stream } from './server.js';

const sass = gulpSass(dartSass);

export const sassBuild = () => {
    const plugins = [
        sortMediaQueries(),
        autoprefixer({
            overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'IE 11', 'iOS >= 9'],
            cascade: false,
            grid: true
        })
    ];

    if (config.isProd) {
        plugins.push(
            cssnano({
                preset: ['default', {
                    discardComments: { removeAll: true },
                    zindex: false 
                }]
            })
        )
    }

    return gulp.src(`${config.src.scss}/style.scss`)
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(gulpif(config.isDev, sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulpif(config.isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(`${config.dest.css}`))
        .pipe(stream())
}

export const sassWatch = () => gulp.watch(`${config.src.scss}/**/*.scss`, sassBuild);
