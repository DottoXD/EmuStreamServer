/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 22/10/2023.
    This project is GPL-3.0 licensed.
*/

new JSMpeg.Player("ws://localhost:8062", {
  canvas: document.getElementById("canvas"),
});
