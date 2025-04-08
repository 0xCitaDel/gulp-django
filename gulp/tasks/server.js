import browserSync from 'browser-sync';
import config from '../config.js';

const bs = browserSync.create();

const server = (callback) => {
  return bs.init({
    port: 3000,
    proxy: "localhost:8000",
    open: false,
    reloadDelay: 300,
    reloadDebounce: 500,
    open: false,
    notify: false,
  });

  callback();
};

const reload = () => {
  bs.reload();
};

const stream = () => bs.stream();

export { server, reload, stream };
