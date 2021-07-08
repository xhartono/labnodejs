const express = require("express");
const app = express();
const port = 8080;

app.use( express.static("public"));
app.use( express.static("node_modules/bootstrap/dist/"));
app.get("/", function (req, res) {
  res.send("Hi, saya Inixindo, hello world");
});

app.get("/index.html", (req, res) => {
  res.send("Inixindo");
});
app.listen(port, function () {
  console.log("aplikasi berjalan pada port ", port);
});
