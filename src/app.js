import cors from "cors";
import express from "express";
import routes from "./routes.js"

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.set('view engine', 'ejs');
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server;