import gulp from 'gulp';
import { build } from 'esbuild';
import config from '../config.js';
import { reload } from './server.js';

export const scriptsBuild = async () => {
    await build({
        entryPoints: [`${config.src.js}/main.js`],
        outfile: `${config.dest.js}/main.min.js`,
        bundle: true,
        minify: config.isProd,
        sourcemap: config.isDev,
        target: 'es5',
        loader: { '.js': 'js' }
    });
    reload();
}

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
