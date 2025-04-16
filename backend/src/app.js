import express from 'express';
import cors from 'cors';

import ResponseRoutes from "./routes/responses.js";

const BASE_URI = '/api/v1';

export default class App {
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 80);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.useRoute('/response', ResponseRoutes);
    }

    useRoute(url, routes) {
        this.app.use(`${BASE_URI}${url}`, routes);
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.info(`Ready to serve requests on port ${this.app.get('port')}`);
    }
}
