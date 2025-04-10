const srcPath = './assets';
const destPath = './src'

const config = {
    src: {
        root: srcPath,
        html: `${srcPath }/html`,
        scss: `${srcPath }/scss`,
        js: `${srcPath }/js`,
        img: `${srcPath }/img`,
        icons: `${srcPath }/img/icons`,
        fonts: `${srcPath}/fonts`
    },
    dest: {
        root: destPath,
        html: `${destPath }/templates`,
        css: `${destPath }/static/css`,
        js: `${destPath }/static/js`,
        img: `${destPath }/static/img`,
        icons: `${destPath }/static/icons`,
        fonts: `${destPath}/static/fonts`
    },
    setEnv() {
        this.isProd = process.argv.includes('--prod');
        this.isDev = !this.isProd;
    },
};

export default config;
