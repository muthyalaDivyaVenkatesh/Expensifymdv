const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


process.env.NODE_ENV =  process.env.NODE_ENV || 'development';

// styles.css is the name of the file
const CSSExtract = new ExtractTextPlugin('styles.css')

if(process.env.NODE_ENV == 'test') {
  require('dotenv').config({ path: '.env.test'});

}
else if (process.env.NODE_ENV == 'development') {
  require('dotenv').config({ path: '.env.development'})
}

module.exports = (env) => {
  const isProduction = env == 'production';

  console.log("env is" ,env)

  return {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    } ,{
      test:/\.s?css$/,
      use:CSSExtract.extract({
        use: [
           {
             loader : 'css-loader',
             options:{
               sourceMap: true
             }
           },

           {
             loader: 'sass-loader',
             options: {
               sourceMap: true
             }
           }
            
        ]
      })
    }]
  },

  plugins: [
    CSSExtract
  ],
  devtool: isProduction ? 'source-map' :'inline-sorce-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback:true
  }
}
};
