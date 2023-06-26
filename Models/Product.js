// schema Produk
const mongoose = require("mongoose");
const router = require("../routes/product");

const ProdukSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  jenis: {
    type: Number,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  gambar: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProdukSchema);
