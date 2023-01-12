const mongoose = require("mongoose");

const Mahasiswa = mongoose.model("mahasiswa", {
  nim: { type: String, required: true },
  nama: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = { Mahasiswa };
