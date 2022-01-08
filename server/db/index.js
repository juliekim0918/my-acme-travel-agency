const db = require("./db");
const Sequelize = require("sequelize");
const City = require("./City");
const Client = require("./Client");
const seed = require("./seed");
const faker = require("faker");
const { DATE, STRING } = Sequelize.DataTypes;

const Trip = db.define("trip", {
  date: {
    type: DATE,
    defaultValue: faker.date.future(),
  },
  purpose: {
    type: STRING,
    defaultValue: "pleasure",
  },
});

Client.belongsTo(City, { as: "base" });
Trip.belongsTo(Client);
Trip.belongsTo(City);

// City.belongsToMany(Client, {
//   through: Trip,
//   foreignKey: "destinationId",
// });
// Client.belongsToMany(City, { through: Trip });

module.exports = {
  db,
  seed,
  City,
  Client,
  Trip,
};
