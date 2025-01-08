const mongoose = require("mongoose");

const ConnectDB = async () => {
  const url = process.env.DB_URL;

  mongoose
    .connect(url)
    .then((data) => {
      console.log("Connected to the database", data.connection.host);
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message);
    });
};

module.exports = ConnectDB;
