// webpack.config.js
module.exports = {
    // Other webpack configuration options...
  
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Match both .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
  