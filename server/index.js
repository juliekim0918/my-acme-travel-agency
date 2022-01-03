const express = require("express");
const { internet } = require("faker");
const app = express();
const path = require("path");
const volleyball = require("volleyball");
const { db } = require("./db");
const PORT = process.env.PORT || 8080;

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: true });
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
