const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
const port = 3000;

require("./utils/db");
const { Mahasiswa } = require("./model/model");

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("beranda", {
    title: "Halaman Login",
    layout: "partials/main",
    isLogin: false,
  });
});

app.post("/masuk", async (req, res) => {
  const mhs = await Mahasiswa.findOne({ nim: req.body.nim });
  if (!req.body.password && mhs.password) {
    res.status(404);
    res.redirect("/");
  }

  res.status(200);
  res.redirect("/beranda");
  res.render("beranda", {
    title: "Beranda",
    layout: "partials/main",
    isLogin: true,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`);
});
