import gulp from 'gulp';
import browserSync from 'browser-sync'
import config from '../config.js';
import { reload } from './server.js';

export const htmlBuild = async () => {
    return gulp.src(`${config.src.html}/**/*.html`, { base: config.src.html })
        .pipe(gulp.dest(config.dest.html))
        .on('end', () => reload(() => {}));
};

export const htmlWatch = () => gulp.watch(`${config.src.html}/**/*.html`, htmlBuild);
