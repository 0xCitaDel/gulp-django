import {deleteAsync} from 'del';
import config from '../config.js';

const clean = () => {
    return deleteAsync([
    `${config.dest.root}/templates/**/*`,
    `${config.dest.root}/static/**/*`
    ], { force: true });
}

export default clean;
