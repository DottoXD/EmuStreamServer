/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import { FastifyInstance } from "fastify";
import View from "@fastify/view";
import Path from "path";

export function run(Fastify: FastifyInstance): void {
  Fastify.register(View, {
    engine: {
      ejs: require("ejs"),
    },
    root: Path.join(__dirname, "../views"),
  });
}
