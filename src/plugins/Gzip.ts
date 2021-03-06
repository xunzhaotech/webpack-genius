import { WebpackPluginInstance } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { PluginHandle } from './PluginHandle';

export class Gzip extends PluginHandle {
  public collect(): WebpackPluginInstance[] {
    return [
      new CompressionPlugin({
        threshold: 8192,
        test: [
          /\.js(\?.*)?$/i,
          /\.css(\?.*)?$/i,
        ],
      }),
    ];
  }
}
