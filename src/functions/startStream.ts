/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 24/10/2023.
    This project is GPL-3.0 licensed.
*/

import { spawn, ChildProcess } from "child_process";

export let xProcess: ChildProcess;
export let streamProcess: ChildProcess;

export let streamWidth: number;
export let streamHeight: number;

export default async function startStream(X: number, Y: number): Promise<void> {
  streamWidth = X;
  streamHeight = Y;

  spawn("export", ["DISPLAY=:17"]);
  xProcess = spawn("Xvfb", `":17 -screen 0 ${X}x${Y}x24`.split(" "));
  streamProcess = spawn(
    "ffmpeg",
    `-framerate 60 -video_size ${X}x${Y} -f x11grab -i :17 -preset ultrafast -tune zerolatency -qscale 0 -vf format=yuv420p -b:v 10M -omit_video_pes_length 1 -f mpegts -g 2 udp://127.0.0.1:4040`.split(
      " ",
    ),
  );
}
