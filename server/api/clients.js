const express = require("express");
const app = express.Router();
const { db, City, Client, Trip } = require("../db/index");

app.get("/", async (req, res, next) => {
  try {
    const clients = await Client.findAll({
      include: [{ model: City, as: "base" }],
    });
    res.send(clients);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
