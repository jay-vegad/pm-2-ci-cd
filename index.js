const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/find-product", (req, res) => {
  res.json({
    msg: "Product found",
    product: {
      id: 1,
      name: "Product 1",
      price: 100,
    },
  });
});

app.get("/find-product/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "Product found",
    product: {
      id: id,
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
