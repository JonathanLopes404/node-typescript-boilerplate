import express, { type Express } from "express"

class App {
  app: Express

  constructor() {
    this.app = express()
  }

  listen(port: number, callback?: () => void): void {
    this.app.listen(port, callback)
  }
}

export default new App()
