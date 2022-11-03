const express = require("express");
const router = express.Router();
const db = require("../db");
const { v4: uuidv4 } = require("uuid");

const message = { message: "ok" };

router.route("/seats").get((req, res) => {
  res.json(db.seats);
});

router.route("/seats/:id").get((req, res) => {
  const user = db.seats.find((userId) => userId.id == req.params.id);
  res.json(user);
});

router.route("/seats/random").get((req, res) => {
  const randomSeat = db.seats[Math.floor(Math.random() * db.seats.length)];
  res.json(randomSeat);
});

router.route("/seats").post((req, res) => {
  const { day, seat, client, email } = req.body;
  const postSeats = {
    id: uuidv4(),
    day: day,
    seat: seat,
    client: client,
    email: email,
  };
  db.seats.push(postSeats);
  res.json(message);
});

router.route("/seats/:id").put((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const userId = db.seats.find((userId) => userId.id == req.params.id);
  if (userId) {
    userId.performer = performer;
    userId.genre = genre;
    userId.price = price;
    userId.day = day;
    userId.image = image;

    res.json(userId);
  }
});

router.route("/seats/:id").delete((req, res) => {
  const deleteSeats = db.seats.find((userId) => userId.id == req.params.id);

  const indexOf = db.seats.indexOf(deleteSeats);
  db.seats.splice(indexOf, 1);

  res.json(message);
});

module.exports = router;
