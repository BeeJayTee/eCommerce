const express = require("express");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/product");

// middleware
app.use(express.json());
app.use(cors());

// quick custom log middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// middleware routes
app.use("/products", productRoutes);

app.listen(process.env.PORT || "4141", () => [
  console.log(`listening on port: ${process.env.PORT || 4141}`),
]);
