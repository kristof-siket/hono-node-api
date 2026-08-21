// @ts-check
import { module } from "@prisma/composer";
import honoNodeService from "./service.mjs";

export default module("hono-node-api", ({ provision }) => {
  provision(honoNodeService, { id: "hononode" });
});
