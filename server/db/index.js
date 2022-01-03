const db = require("./db");
const Sequelize = require("sequelize");
const City = require("./City");
const Client = require("./Client");
const seed = require("./seed");
const { DATE, STRING } = Sequelize.DataTypes;

const Trip = db.define("trip", {
  date: {
    type: DATE,
  },
  purpose: {
    type: STRING,
  },
});

Client.belongsTo(City, { as: "baseCity" });

City.belongsToMany(Client, { through: Trip, foreignKey: "destinationId" });
Client.belongsToMany(City, { through: Trip });

module.exports = {
  db,
  seed,
  City,
  Client,
  Trip,
};
