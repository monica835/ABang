const path=require('path')
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                "src":path.resolve(__dirname,'src'),
                "assets":path.resolve(__dirname,'src/assets'),
                "components":path.resolve(__dirname,'src/components'),
                "module":path.resolve(__dirname,'src/modules'),
                "services":path.resolve(__dirname,'src/services'),
                "router":path.resolve(__dirname,'src/router'),
            }
        }
    },

        rules: [
          {
            test: /\.s(c|a)ss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                // Requires sass-loader@^7.0.0
                options: {
                  implementation: require('sass'),
                  fiber: require('fibers'),
                  indentedSyntax: true // optional
                },
                // Requires sass-loader@^8.0.0
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    fiber: require('fibers'),
                    indentedSyntax: true // optional
                  },
                },
              },
            ],
          },
        ],
}