
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: config=>{
    if(config.mode === "production"){
      // use gz
      config.plugins.push(
          new CompressionWebpackPlugin(),
          new BundleAnalyzerPlugin(),
      );
      config.devtool = false;
    }
  },
}
