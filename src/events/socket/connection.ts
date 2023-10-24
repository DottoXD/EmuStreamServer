/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 22/10/2023.
    This project is GPL-3.0 licensed.
*/

import { streamWidth, streamHeight } from "../../functions/startStream";
import { WebSocket } from "ws";
import { spawn } from "child_process";

export class SocketEvent {
  public SocketObject: WebSocket;

  constructor(Socket: WebSocket) {
    this.SocketObject = Socket;
  }

  public async run(): Promise<void> {
    const Ffmpeg = spawn(
      "ffmpeg",
      `-i udp://127.0.0.1:4040 -f mpegts -preset ultrafast -tune fastdecode -flags low_delay -analyzeduration 1 -strict experimental -fflags nobuffer -probesize 32 -codec:v mpeg1video -s ${streamWidth}x${streamHeight} -b:v 10M -`.split(
        " ",
      ),
    );

    //<canvas id="canvas"></canvas>

    Ffmpeg.stdout.on("data", (Data) => {
      this.SocketObject.send(Data);
    });

    this.SocketObject.on("close", () => {
      Ffmpeg.kill();
    });
  }
}
