// (5) Buat router Mahasiswa
const express = require("express");
const router = express.Router();
const Products = require("../Models/Product");

// Create
router.post("/", async (req, res) => {
  // tampung input mahasiswa
  const productsPost = new Products({
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
    gambar: req.body.gambar,
  });

  try {
    // simpan data
    const products = await productsPost.save();
    // response
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get id
router.get("/:jenis/j", async (req, res) => {
  try {
    const products = await Products.find({ jenis: req.params.jenis });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update
router.put("/:productsId", async (req, res) => {
  // tampung input mahasiswa
  const data = {
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
    gambar: req.body.gambar,
  };

  try {
    // update data
    const products = await Products.updateOne(
      { _id: req.params.productsId },
      data
    );
    // response
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:productsId", async (req, res) => {
  try {
    // delete data
    const products = await Products.deleteOne({ _id: req.params.productsId });
    // response
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/", async (req, res) => {
  try {
    // delete data
    const products = await Products.deleteOne();
    // response
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
