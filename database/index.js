const debug = require("debug")("todo:database");

const mongoose = require("mongoose");

const connectDB = (stringConnection) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-underscore-dangle
        delete ret._v;
      },
    });
    mongoose.connect(stringConnection, (error) => {
      if (error) {
        debug("I can't connected database");
        debug(error.message);
        reject();
        return;
      }
      debug("Connect to the basadate");
      resolve();
    });
    mongoose.connection.on("close", () => {
      debug("Connexion to database OVER");
    });
  });

module.exports = connectDB;
