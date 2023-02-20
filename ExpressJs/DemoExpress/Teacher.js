const express = require("express");
const teacherRouter = express.Router();

const teacher = [
  {
    name: "LuongGv",
    age: 30,
    id: 1,
    class: "2A",
  },
  {
    name: "VanGv",
    age: 39,
    id: 2,
    class: "2B",
  },
  {
    name: "QuangGv",
    age: 40,
    id: 3,
    class: "2C",
  },
];

teacherRouter.get("/", (req, res) => {
  res.json(teacher);
});

teacherRouter.get("/add", (req, res) => {
  teacher.push({ name: "Huy", age: "40" });
  res.json(teacher);
});

teacherRouter.get("/:id", (req, res) => {
  const idPrams = req.params.id;
  const findTeacher = teacher.filter(
    (teacher) => teacher.id === parseInt(idPrams)
  );
  if (findTeacher) {
    res.json(findTeacher);
  } else {
    res.send("Không tìm thấy giáo viên này");
  }
});

module.exports = teacherRouter;
