module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-1']
          },
          options:{
            babelrc: true,
          }
        }]
        
        
        
        
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  };