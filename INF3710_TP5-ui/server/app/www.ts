import "reflect-metadata";
import { container } from "./inversify.config";
import { Server } from "./server";
import Types from "./types";

const server: Server = container.get(Types.Server);

server.init();
