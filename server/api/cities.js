const express = require("express");
const app = express.Router();
const { db, City, Client, Trip } = require("../db/index");

app.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll();
    res.send(cities);
  } catch (error) {
    next(error);
  }
});
module.exports = app;
