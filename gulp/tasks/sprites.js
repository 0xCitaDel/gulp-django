import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import config from '../config.js';


const spriteSolid = () => {
    return gulp.src(`${config.src.icons}/solid/*.svg`)
        .pipe(svgmin())
        .pipe(cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({ mode: {symbol: {sprite: "../sprite-solid.svg"}}}))
        .pipe(gulp.dest(`${config.dest.icons}`));
}

const spriteMulticolor = () => {
  return gulp.src(`${config.src.icons}/multicolor/*.svg`)
    .pipe(svgmin())
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../sprite-multicolor.svg",
                example: config.isDev
            }
        },
        svg: {namespaceClassnames: false}
    }))
    .pipe(gulp.dest(`${config.dest.icons}`));

}

export const spritesBuild = gulp.parallel(spriteSolid, spriteMulticolor);

export const spritesWatch = () => {
    gulp.watch(`${config.src.icons}/solid/**/*.svg`, spriteSolid);
    gulp.watch(`${config.src.icons}/multicolor/**/*.svg`, spriteMulticolor);
}
