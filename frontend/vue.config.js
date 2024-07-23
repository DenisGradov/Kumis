const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true)
      }),
      new webpack.HotModuleReplacementPlugin() // Включаем HMR
    ]
  },
  devServer: {
    hot: true,
    liveReload: false,
    allowedHosts: 'all'
  }
}
