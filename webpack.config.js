module.exports = {
    debug: true,
    devtool: 'source-map',
    entry : './src/scripts/app.js',
    output : {
        filename : 'app.js'
    },
    watch: true,
    watchOptions: { 
        aggregateTimeout: 300,
        ignored: 'node_modules',
        poll: 1000
    }
};