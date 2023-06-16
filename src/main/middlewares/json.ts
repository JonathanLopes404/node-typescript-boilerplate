import { json } from "express";

export default function jsonMiddleware() {
  return json();
}
