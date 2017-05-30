const trash = require('trash')

module.exports = {
 webpack: (config) => {
     config.module.rules.push(
       {
         test: /\.scss$/,
         use: [
           {
             loader: 'emit-file-loader',
             options: {
               name: 'dist/[path][name].[ext]'
             }
           },
           {
             loader: 'skeleton-loader',
             options: {
               procedure: function (content) {
                 const fileName = `${this._module.userRequest}.json`
                 const classNames = fs.readFileSync(fileName, "utf8")

                 trash(fileName)

                 return ['module.exports = {',
                   `styles: ${classNames},`,
                   `stylesheet: \`${content}\``,
                   '}'
                 ].join('')
               },
               cacheable: false
             }
           },
           'postcss-loader',
           'sass-loader'
         ]
       }
     )

     return config
   }
}

