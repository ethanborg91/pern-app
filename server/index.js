//Constants
const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());

//Server
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
