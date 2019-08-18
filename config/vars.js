export default {
    env: process.env.NODE_ENV,
    port: 3000,
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
}