/*
    @ EmuStreamServer @
    
    - Coded by DottoXD -
    Last file edit: 21/10/2023.
    This project is GPL-3.0 licensed.
*/

const { exec } = require("child_process");

exec("cp -r ./src/views ./dist/src/views", (e, stdo, stde) => {
  console.log(e, stdo, stde);
});

exec(
  "cp -r ./src/content/style.css ./dist/src/content/style.css",
  (e, stdo, stde) => {
    console.log(e, stdo, stde);
  },
);
