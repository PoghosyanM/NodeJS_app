const express = require("express");
const adminData = require("./admin");
const router = express.Router();
const products = adminData.products;

router.get("/", (req, res, next) => {
  res.render("handlebars/shop", {
    products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
  });
});

module.exports = router;
