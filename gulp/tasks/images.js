import gulp from 'gulp';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import pngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import config from '../config.js';


const copyImages = async () => {
    const imagemin = (await import("gulp-imagemin")).default;
    const imageminPlugin = (await import("gulp-imagemin"));

    return gulp.src(`${config.src.img}/**/*`, { encoding: false })
        .pipe(changed(config.dest.img))
        .pipe(gulpif(config.isDev, imagemin([
            imageminPlugin.mozjpeg({ quality: 75, progressive: true }),
            pngquant({
                quality: [0.65, 0.8], // хорошее визуальное качество, минимальный вес
                speed: 1,             // максимальное качество (медленнее, но лучше)
                strip: true,          // убираем метаданные (EXIF, текст и т.д.)
                dithering: 0,       // мягкое "размытие" переходов цвета (можно отключить: 0)
                verbose: true         // чтобы знать, кто сколько похудел 🏋️
            }),
            imageminPlugin.svgo()
        ])))
    .pipe(gulp.dest(config.dest.img))
};


const convertImagesToWebp = async () => {

    const imagemin = (await import("gulp-imagemin")).default;
    return gulp.src(`${config.src.img}/**/*.{jpg,png}`, { encoding: false })
        .pipe(changed(config.dest.img, { extension: '.webp' }))
        .pipe(imagemin([
          imageminWebp({ quality: 90, alphaQuality: 100, }),
        ]))
        .pipe(rename({
          extname: '.webp',
        }))
        .pipe(gulp.dest(config.dest.img))
};

export const imagesBuild = gulp.series(copyImages, convertImagesToWebp);

export const imagesWatch = () => gulp.watch(`${config.src.img}/**/*`, imagesBuild)
