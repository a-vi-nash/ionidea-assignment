const express = require("express"),
  router = express.Router(),
  schema = require("./schema");

router.post(
  "/login",
  global.expressJoi.joiValidate(schema.login), //input validation
  (req, res) => {
    res
    .status(global.config.default_success_http_code)
    .send({ user:req.body.username});
  }
);


module.exports = router;
