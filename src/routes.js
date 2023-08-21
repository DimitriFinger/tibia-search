import { Router } from "express";
import searchCharController from "./controllers/searchCharController.js";


const routes = new Router();

routes.get('/2', searchCharController.searchChar);
routes.get('/', (req, res) => res.render('index'));

export default routes;