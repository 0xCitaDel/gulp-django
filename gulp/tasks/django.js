import gulp from 'gulp';
import { reload } from './server.js';
import { spawn } from 'child_process';

export const runDjango = (cb) => {
  const cmd = spawn('poetry', ['run', 'python3', 'src/manage.py', 'runserver', '0.0.0.0:8000'], {
    stdio: 'inherit',
  });

  cmd.on('close', (code) => {
    console.log('Django application exited with code ' + code);
    cb(code);
  });
};
