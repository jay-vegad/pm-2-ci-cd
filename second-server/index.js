const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({
    msg: "Health check successful",
  });
});

app.get("/patient", (req, res) => {
  res.json({
    msg: "Patients found",
    patient: [{ id: 1, name: "Patient 1", age: 20 }],
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
