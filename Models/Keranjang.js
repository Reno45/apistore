// (4) Buat Schema Mahasiswa
const mongoose = require("mongoose");

const KeranjangSchema = mongoose.Schema({
  // Buat Schema data
  jumlah_pemesanan: {
    type: String,
    required: true,
  },
  products: {
    _id: {
      type: String,
    },
    nama: {
      type: String,
    },
    harga: {
      type: Number,
    },
    gambar: {
      type: String,
    },

    jenis: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Keranjang", KeranjangSchema);
