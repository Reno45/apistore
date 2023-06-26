// definisi module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(
  bodyParse.urlencoded({
    extended: true,
  })
);
app.use(bodyParse.json());
app.use(cors());

const produkRoutes = require("./routes/product");
const keranjangRoutes = require("./routes/keranjang");

app.use("/product", produkRoutes);
app.use("/keranjang", keranjangRoutes);

// kneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// handel error
db.on("error", console.error.bind(console, "koneksi ke mongoDB error"));
// mongodb bener
db.once("open", () => {
  console.log("Terhubung ke Database mongoDB");
});
// listen port
app.listen(process.env.PORT, () => {
  console.log(`server berjalan di port ${process.env.PORT}`);
});
