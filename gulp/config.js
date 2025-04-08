const srcPath = './assets';
const destPath = './src'

const config = {
    src: {
        root: srcPath,
        html: `${srcPath }/html`,
        scss: `${srcPath }/scss`,
        js: `${srcPath }/js`,
        img: `${srcPath }/img`,
        fonts: `${srcPath}/fonts`
    },
    dest: {
        root: destPath,
        html: `${destPath }/templates`,
        css: `${destPath }/static/css`,
        js: `${destPath }/static/js`,
        img: `${destPath }/static/img`,
        fonts: `${destPath}/static/fonts`
    },
    setEnv() {
        this.isProd = process.argv.includes('--prod');
        this.isDev = !this.isProd;
    },
};

export default config;
