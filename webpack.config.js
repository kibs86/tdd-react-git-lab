module.exports = {
    debug: true,
    devtool: 'source-map',
    entry : './src/scripts/app.js',
    output : {
        filename : 'app.js'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: 'node_modules',
        poll: 1000
    },
    module : {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    /*plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production'
            }
        })
    ]*/
};