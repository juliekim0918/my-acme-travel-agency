const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_travel_agency_db",
  { logging: false }
);


module.exports = db