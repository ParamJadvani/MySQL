const express = require("express");
const db = require("./config/db"); 
require("dotenv").config(); 

const app = express();

app.use(express.json());


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


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
