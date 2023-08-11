import cors from "cors";
import express from "express";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }
}

export default new App().server;