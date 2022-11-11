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

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((req, res) => {
  res.status(404).send({ message: "Not found..." });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});
