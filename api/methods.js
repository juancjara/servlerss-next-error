export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const p = {
    b: req.body,
    p: req.params,
    q: req.query,
  };
  console.log(p);
  if (req.method === "POST") {
    res.end(JSON.stringify({ name: "POST", p }));
  } else {
    res.end(JSON.stringify({ name: req.method, p }));
  }
};
