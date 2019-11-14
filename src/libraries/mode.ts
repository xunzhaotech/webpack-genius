import { WebpackGenius } from '../WebpackGenius';
import { Configuration } from 'webpack';

export const setMode = (genius: WebpackGenius): Configuration['mode'] => {
  return genius.isProd() ? 'production' : 'development';
};
