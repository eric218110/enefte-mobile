module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@main': './src/main',
          '@presentation': './src/presentation',
          '@utils': './src/utils'
        }
      }
    ]
  ]
}
