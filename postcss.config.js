module.exports = ({ file, options, env }) => {
  return {plugins: {
    'postcss-cssnext': true,
    'postcss-modules': {generateScopedName: '[local]-[hash:base64:5]'},
    'cssnano': env === 'production' ? options.cssnano : false
  }}
}
