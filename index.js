const express = require("express");
const db = require("./config/db");
require("dotenv").config();
const appRoutes = require("./routes/indexRoutes");

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully!");
    await db.sync();
    console.log("Database synchronized successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const app = express();

app.use(express.json());

app.use("/api/v1", appRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
