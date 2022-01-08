const express = require("express");
const app = express();
const path = require("path");
const seed = require("./db/seed");
const volleyball = require("volleyball");
const { db } = require("./db");
const PORT = process.env.PORT || 8080;

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use("/api/clients", require("./api/clients"));
app.use("/api/cities", require("./api/cities"));
app.use("/api/trips", require("./api/trips"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: true });
    await seed();
    app.listen(PORT, () =>
      console.log(`
         
        Listening on port ${PORT}

          http://localhost:${PORT}/
        
    
      `)
    );
  } catch (error) {
    console.error(error);
  }
};

init();

module.exports = app;
