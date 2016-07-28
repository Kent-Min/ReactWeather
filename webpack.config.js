module.exports = {
  entry : './app/app.jsx',
  output: {
    //here dirname it is __ not _ (double)
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx'


    },
    extension: ['', '.js', '.jsx']
  },

  module: {
    loaders : [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  //this is the tool used for debugging purposes. Let developer find the exact place where the code is written
  devtool: 'cheap-module-eval-source-map'


};
