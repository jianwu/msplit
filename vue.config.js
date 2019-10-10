module.exports = {
  publicPath: './',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: false,
    publicPath: '/',
    hotOnly: false,
    historyApiFallback: true,
  },
};
