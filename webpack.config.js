const path = require('path')
const Dotenv = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    pathinfo: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].chunk.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [autoprefixer]
      //         }
      //       }
      //     },
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader', 'postcss-loader']
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(wav|mp3|ogg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline'
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
      'react/jsx-runtime.js': 'react/jsx-runtime'
    },
    fallback: {
      buffer: require.resolve('buffer')
    }
  },
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
    new NodePolyfillPlugin(),
    new ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      watch: true
    },
    compress: true,
    port: 4004,
    historyApiFallback: true,
    hot: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
