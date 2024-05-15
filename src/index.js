import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import indexRouter from './routes/indexRouter.js';
import errorsMiddleware from './middlewares/errorsMiddleware.js';
import config from './config.js';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connect().then(() => server());

async function server() {
    try {
        const app = express();
        const PORT = config.serverPort;
        const HOST = config.serverHost;
        const publicPath = path.join(__dirname, 'public');
         
        app.use(cors());
        app.use(express.json());
        app.use('/', indexRouter);
        app.use(express.static(publicPath));
        app.use(errorsMiddleware);

        app.listen(PORT, () => console.log(`Server listens http://${HOST}:${PORT}`));
    } catch (error) {
        console.error('Start server error:', error);
    }
}

async function connect() {
    const db = `mongodb://${config.databaseHost}:${config.databasePort}/${config.databaseName}`;

    mongoose.set('strictQuery', true);

    mongoose
        .connect(db)
        .then(() => console.log('Connected to db'))
        .catch(error => console.log(error));
}
