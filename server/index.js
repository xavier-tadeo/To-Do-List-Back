const express = require("express");
const cors = require("cors");
const debug = require("debug")("todo:server");

const morgan = require("morgan");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve) => {
    const server = app.listen(port, () => {
      debug(`¡Escuchanddo en ${port}! ʕ•ᴥ•ʔﾉ♡`);
      resolve(server);
    });

    server.on("error", (error) => {
      debug("No se ha podido iniciar el servidor :(");
      if (error.code === "EADDRINUSE") {
        debug(`${port} está en uso...  ʕʘ̅┏ل͜┓ʘ̅ʔ`);
      }
    });
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

module.exports = { initializeServer, app };
