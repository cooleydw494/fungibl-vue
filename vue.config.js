// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    devServer: {
        host: 'app.fungibl.local',
    },
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        plugins: [new NodePolyfillPlugin()],
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
    },
}
