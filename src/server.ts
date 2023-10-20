/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import Fastify, { FastifyInstance } from "fastify";
import Io, { Server as IoServer } from "socket.io";
import Http, { Server } from "http";
import Path from "path";
import Fs from "fs";

export default class EmuStreamServer {
  public FastifyServer: FastifyInstance;
  public HttpServer: Server;
  public SocketServer: IoServer;

  constructor() {
    this.FastifyServer = Fastify({
      logger: true,
      ignoreTrailingSlash: true,
    });

    this.HttpServer = Http.createServer();
    this.SocketServer = new Io.Server(this.HttpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    this.init();
    this.handler();
    this.loadPlugins();
    this.loadRoutes();
  }

  private async init(): Promise<void> {
    await this.FastifyServer.listen({ host: "0.0.0.0", port: 80 });
    this.HttpServer.listen(8062, "0.0.0.0");
  }

  private async handler(): Promise<void> {
    Fs.readdirSync(Path.join(__dirname, "./events/socket")).forEach(
      (File: string) => {
        const Event = require(
          `${Path.join(__dirname, "./events/socket")}/${File}`,
        );
        this.SocketServer.on(File.replace(".js", ""), (...args) => {
          new Event.SocketEvent(args[0]).run();
        });
      },
    );
  }

  private async loadPlugins(): Promise<void> {
    Fs.readdirSync(Path.join(__dirname, "./plugins")).forEach(
      (File: string) => {
        require(`${Path.join(__dirname, "./plugins")}/${File}`).run(
          this.FastifyServer,
        );
      },
    );
  }

  private async loadRoutes(): Promise<void> {
    Fs.readdirSync(Path.join(__dirname, "./routes")).forEach((File: string) => {
      const Route = require(`${Path.join(__dirname, "./routes")}/${File}`);

      this.FastifyServer.register(Route);
    });
  }
}
