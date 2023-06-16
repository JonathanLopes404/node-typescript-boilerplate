import { Express } from "express";
import corsMiddleware from "../middlewares/cors";
import jsonMiddleware from "../middlewares/json";

export default (app: Express) => {
  app.use(jsonMiddleware());
  app.use(corsMiddleware());
};
