const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = {
  'development': 'dist',
  'production': '../demo'
}

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,
    entry: './src/index.ts',
    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(__dirname, OUTPUT_PATH[env.NODE_ENV])
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.tsx', '.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }, {
          test: /\.(wav)$/i,
          loader: 'file-loader'
        }, {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }, {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
}
