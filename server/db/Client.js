const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize.DataTypes;

const Client = db.define("client", {
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Client;
