const path = require('path');
const nodeExternals = require('webpack-node-externals');

const nodeConfig = {
    entry: {
        './node/index': './src/index.js',
        './node/index.en': './src/index.en.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ],
                        plugins: [
                            // '@babel/plugin-proposal-class-properties',
                            // '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-private-methods',
                        ],
                    }
                }
            }
        ]
    }
};


const webConfig = {
    entry: {
        './web/index': './src/index.js',
        './web/index.en': './src/index.en.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'web',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                        plugins: [
                            // '@babel/plugin-proposal-class-properties',
                            // '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-private-methods',
                        ],
                    }
                }
            }
        ]
    }
};

module.exports = [nodeConfig, webConfig];
