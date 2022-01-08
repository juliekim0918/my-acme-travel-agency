const express = require("express");
const app = express.Router();
const { db, City, Client, Trip } = require("../db/index");

app.get("/", async (req, res, next) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: City,
        },
        {
          model: Client,
          include: { model: City, as: "base" },
        },
      ],
      order: [["date", "ASC"]],
    });
    res.send(trips);
  } catch (error) {
    next(error);
  }
});

app.delete("/:id", async (req, res, next) => {
  try {
    const tripToDelete = await Trip.findOne({
      where: { id: req.params.id },
    });
    console.log(tripToDelete);
    await tripToDelete.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const client = await Client.findOne({
      where: {
        name: req.body.client,
      },
    });
    const city = await City.findOne({
      where: {
        name: req.body.city,
      },
    });
    const trip = await Trip.create({
      date: req.body.date,
      purpose: req.body.purpose,
      clientId: client.id,
      cityId: city.id,
    });
    res.send(trip);
  } catch (error) {
    next(error);
  }
});

app.get("/clients/:id", async (req, res, next) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: City,
        },
        {
          model: Client,
        },
      ],
      where: {
        clientId: req.params.id,
      },
    });
    res.send(trips);
  } catch (error) {
    next(error);
  }
});

app.get("/destinations/:id", async (req, res, next) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: City,
        },
        {
          model: Client,
        },
      ],
      where: {
        cityId: req.params.id,
      },
    });
    res.send(trips);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
