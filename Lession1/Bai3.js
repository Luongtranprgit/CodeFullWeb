const data = {
  name: "tuananh",
  children: ["com", "ngo"],
  age: "31",
};
const querystring = require("querystring");

let kq = querystring.stringify(data);
console.log(kq);
