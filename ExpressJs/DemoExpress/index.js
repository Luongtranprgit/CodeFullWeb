// const jsonexport = require("jsonexport");

// jsonexport(member, function (err, csv) {
//   if (err) console.log(err);
//   console.log(csv);
// });

const express = require("express");
const app = express();

const studentsRouter = require("./Students");
const teacherRouter = require("./Teacher");

app.use("/student", studentsRouter);
app.use("/teacher", teacherRouter);

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Welcome to user");
});
const port = 3000;

app.listen(port, () => {
  console.log(`Đây là cổng vào ${port}`);
});
