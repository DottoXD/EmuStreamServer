/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function Index(Fastify: FastifyInstance) {
  Fastify.get("/", async (Request: FastifyRequest, Response: FastifyReply) => {
    return Response.view("index.ejs");
  });
}
