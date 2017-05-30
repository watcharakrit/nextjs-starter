module.exports = (ctx) => ({
  plugins: {
    'postcss-cssnext': true,
    'postcss-modules': {generateScopedName: '[local]-[hash:base64:5]'},
    'cssnano': ctx.env === 'production' ? true : false
  }
})
