const { exec } = require("child_process");

exec("cp -r ./src/views ./dist/src/views", (e, stdo, stde) => {
  console.log(e, stdo, stde);
});
