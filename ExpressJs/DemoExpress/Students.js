const express = require("express");
const studentsRouter = express.Router();

const students = [
  {
    name: "Luong",
    age: 18,
  },
  {
    name: "Van",
    age: 19,
  },
  {
    name: "Quang",
    age: 20,
  },
];

studentsRouter.get("/", (req, res) => {
  res.json(students);
});

studentsRouter.get("/add", (req, res) => {
  students.push({ name: "Huy", age: "20" });
  res.json(students);
});

module.exports = studentsRouter;
