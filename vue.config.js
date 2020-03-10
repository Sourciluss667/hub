module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    // open: process.platform === 'darwin',
    host: '51.178.40.31',
    port: 443, // CHANGE YOUR PORT HERE!
    disableHostCheck: true
    // https: false,
    // hotOnly: false,
  }
}
