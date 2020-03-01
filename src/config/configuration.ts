export default () => ({
    port: process.env.SERVER_PORT || 3000,
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'db',
        user: process.env.DB_USERNAME || 'user',
        password: process.env.DB_PASSWORD || 'password',
    },
});
