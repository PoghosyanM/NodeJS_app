const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
