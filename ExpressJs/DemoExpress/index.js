// const jsonexport = require("jsonexport");

// const member = [
//   {
//     name: "Luong",
//     age: 18,
//   },
//   {
//     name: "Van",
//     age: 19,
//   },
//   {
//     name: "Quang",
//     age: 20,
//   },
// ];

// jsonexport(member, function (err, csv) {
//   if (err) console.log(err);
//   console.log(csv);
// });

const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Welcome to user");
});
const port = 5000;

app.listen(port, () => {
  console.log(`Đây là cổng vào ${port}`);
});
