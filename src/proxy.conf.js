const PROXY_CONFIG = [
    {
        context: ['/v1'],
        target: 'https://api.openai.com',
        secure: true,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/v1': '/v1' }
    }
];

module.exports = PROXY_CONFIG;
