const express = require("express");
const router = express.Router();
const Keranjang = require("../Models/Keranjang");

// Create
router.post("/", async (req, res) => {
  const keranjangPost = new Keranjang(req.body);

  try {
    // simpan data
    const keranjang = await keranjangPost.save();
    // response
    res.json(keranjang);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const keranjang = await Keranjang.find();
    res.json(keranjang);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:keranjangId", async (req, res) => {
  // tampung input mahasiswa
  const data = {};

  try {
    // update data
    const keranjang = await Keranjang.updateOne(
      { _id: req.params.keranjangId },
      data
    );
    // response
    res.json(keranjang);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:keranjangId", async (req, res) => {
  try {
    // delete data
    const keranjang = await Keranjang.deleteOne({
      _id: req.params.keranjangId,
    });
    // response
    res.json(keranjang);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
