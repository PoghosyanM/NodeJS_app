const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("ejs/404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
