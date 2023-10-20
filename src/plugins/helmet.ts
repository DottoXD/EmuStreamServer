/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import { FastifyInstance } from "fastify";
import Helmet from "@fastify/helmet";

export function run(Fastify: FastifyInstance): void {
  Fastify.register(Helmet, {
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false,
  });
}
