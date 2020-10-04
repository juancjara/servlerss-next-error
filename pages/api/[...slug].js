var Router = require("router");
var finalhandler = require("finalhandler");
var Cookies = require("cookies");

var router = Router();

router
  .get("/api/hello", (req, res) => {
    res.json({ bar: "ff" });
  })
  .get("/api/foo", (req, res) => {
    console.log(req.params);
    res.json({ asdfadf: "1231231" });
  })
  .post("/api/foo", (req, res) => {
    console.log(req.params);
    try {
      const cookies = new Cookies(req, res);
      console.log("co");
      cookies.set("cookiee", "value");
    } catch (e) {
      console.log(e);
    }
    //res.cookie("cookietest", "value");
    res.json({ post: "1231231" });
  });

export default async (req, res) => {
  console.log("hi there");
  router(req, res, finalhandler(req, res));
  //res.json({ foo: "bar3" });
};
