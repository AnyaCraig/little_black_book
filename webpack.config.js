module.exports = {
    entry: "./entry.js",
    output: {
        path: "dist",
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['react', 'es2015']
         }
       },
       {
         test: /\.scss$/,
         loaders: ["style-loader", "css-loader", "sass-loader"]
       },
       {    
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=[name].[ext]',
        }
      ]
    },
    devServer: {
        historyApiFallback: true
    }
};
