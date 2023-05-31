import { type HttpRequest } from "./http-request"

export interface Controller {
  handle: (request: HttpRequest) => Promise<void>
}
