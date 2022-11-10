const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const testimonialsRouters = require("./routes/testimonials.routers");
const seatsRouters = require("./routes/seats.routers");
const concertsRouters = require("./routes/concerts.routers");

app.use("/api", testimonialsRouters);
app.use("/api", seatsRouters);
app.use("/api", concertsRouters);

app.get("/", (req, res) => {
  res.send("Welcome to my page!");
});

app.use((req, res) => {
  res.status(404).send({ message: "Not found..." });
});

app.listen(3000, () => {
  console.log("Server is running on port: 8000");
});
