var debug = process.env.NODE_ENV !== "production";

var webpack         = require('webpack');
var context         = __dirname + "/src";

module.exports = {
  context: context,
  // devtool: debug ? "inline-sourcemap" : null,
  // sourcemap might be handled by parameters
  devtool: null,
  entry: context + "/app.js",
  output: {
    path: __dirname + "/deploy",
    filename: "bundle.min.js"
  },
  
  externals: {
    "jquery": "jQuery",
    "psl": "psl",
    "QUnit": "QUnit"
  },
  
  /*
  plugins: debug ? 
      // DEV
  [
    new webpack.ProvidePlugin({riot: 'riot'})
  ] : // PROD
  [
    new webpack.ProvidePlugin({riot: 'riot'}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  */
  
  module: {
    /*
    preLoaders: [
      { 
        test: /\.tag\.html$/, 
        exclude: /node_modules/, 
        loader: 'riotjs-loader', 
        query: { 
          type: 'none'
        }
      }
    ],
    */
    loaders: [
      {
        test: /\.js$|\.tag\.html$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      },
      /*
      { 
        test: 
        /\.css$/, 
        loader: 'style-loader!css-loader!postcss-loader'
      }
      */
    ],
  },
  
    
  /*
  postcss: function() {
    return [postcssImport, postcssMixins, postcssCssNext];
  }
  */
};
