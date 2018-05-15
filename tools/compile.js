import cpx from 'cpx';
import { resolve } from 'path';

const resolveApp = (relativePath) => {
  return resolve(process.cwd(), relativePath);
};

const copy = (from, to) => {
  cpx.copy(resolveApp(from), resolveApp(to));
};

copy('src/**/**.@(less|css)', 'lib/');
copy('src/**/**.@(png|svg|gif|jpg|eot|ttf|woff)', 'lib/');
