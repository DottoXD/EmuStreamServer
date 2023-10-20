/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import { FastifyInstance } from "fastify";
import Static from "@fastify/static";
import Path from "path";

export function run(Fastify: FastifyInstance): void {
  Fastify.register(Static, {
    root: Path.join(__dirname, "../content"),
  });
}
