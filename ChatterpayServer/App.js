require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

require("./db/conn");
app.use(cors());
app.use(express.json());
app.use(require("./router/Auth"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is listenig to the port ${process.env.PORT}`);
});
