import 'dotenv/config';

export default {
    databaseHost: process.env.DATABASE_HOST,
    databasePort: process.env.DATABASE_PORT,
    databaseUser: process.env.DATABASE_USER,
    databasePassword: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME,
    serverPort: process.env.SERVER_PORT,
    serverHost: process.env.SERVER_HOST,
    user: {
        secretKey: process.env.SECRET_KEY
    }
};
