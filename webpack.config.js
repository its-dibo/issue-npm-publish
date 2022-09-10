
let path = require("path")

module.exports= {
  entry: { main: './index.ts' },
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.ts'],
    symlinks: false,
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: {
      type: 'commonjs2',
    },
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            sourceMap: false,
          },
          onlyCompileBundledFiles: true,
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      },
    ],
  },
};

