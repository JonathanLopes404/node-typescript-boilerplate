import { join } from "node:path"
import express, { type Express, Router } from "express"
import dotenv from "dotenv"
import initMiddlewares from "./config/middlewares"
import routes from "./config/routes"

dotenv.config()

class App {
  express: Express
  router: Router

  constructor() {
    this.express = express()
    this.router = Router()

    initMiddlewares(this.express)
    this.initRoutes()
  }

  initRoutes(): void {
    for (const route of routes) {
      const routeName = route.path.replace("/", "")
      const filePath = join(__dirname, "routes", `${routeName}.ts`)

      import(filePath).then((routeHandler) => {
        routeHandler = routeHandler.default
        const method = route.method ?? "get"
        this.router[method](route.path, routeHandler)
      })
    }

    this.express.use(this.router)
  }

  listen(port: number, callback?: () => void): void {
    this.express.listen(port, callback)
  }
}

export default new App()
