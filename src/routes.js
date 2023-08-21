import { Router } from "express";
import searchCharController from "./controllers/searchCharController.js";


const routes = new Router();

routes.get('/', searchCharController.searchChar);

export default routes;