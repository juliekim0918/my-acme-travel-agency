const db = require("./db");
const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;

const City = db.define("city", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = City;
