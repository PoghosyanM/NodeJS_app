const express = require("express");
const adminData = require("./admin");
const router = express.Router();
const products = adminData.products;

router.get("/", (req, res, next) => {
  res.render("shop", { products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
