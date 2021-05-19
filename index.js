const app = require("express")();
const Host = "0.0.0.0";
const Port = 8080;

app.listen(Port, Host, () => {
  console.log(`sever is running on ${Host}:${Port}`);
});
app.get(`/test`, (req, res) => {
  const { op, a, b } = req.query;
  let r = 0;
  if (op == `add`) {
    r = parseInt(a) + parseInt(b);
  }
  res.send({
    mess: r,
  });
});
