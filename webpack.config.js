/**
 * Created by sks on 2016/12/8.
 */
var path= require("path");
module.exports= {
    entry:'./src/main.js',
    output: {
        path:path.resolve(__dirname,"./dist/"),
        filename:'build.js'
    },
    resolve: {
        alias: {"vue$":"vue/dist/vue.js"}
    },
    module: {
        loaders:[
            {test:/\.jsx?$/,loader:'babel',exclude:/node_modules/},
            {test:/\.css$/,loader:'css!style'}
        ]
    }

}