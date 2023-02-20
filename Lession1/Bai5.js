const http = require("http");
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Day la trang home");
  } else if (req.url === "/about") {
    res.end("Day la thong tin trang");
  } else {
    res.end("Khong co trang nao");
  }
});

sever.listen(5000);
