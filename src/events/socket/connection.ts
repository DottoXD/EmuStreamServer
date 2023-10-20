/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 20/10/2023.
    This project is GPL-3.0 licensed.
*/

import { Socket } from "socket.io";

export class SocketEvent {
  public SocketObject: Socket;

  constructor(Socket: Socket) {
    this.SocketObject = Socket;
  }

  public async run(): Promise<void> {}
}
