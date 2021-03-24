var express = require("express");
var router = express.Router();
var userModel = require("../models/users");

router.get("/getUsers", async function (req, res, next) {
  const users = await userModel.find((err, data) => {
    if (!err) res.send(data)
    else console.log("Error to get data ->", err)
})
  console.log(users);
});

/* POST */
router.post("/createUser", async function (req, res, next) {
  console.log("req.body", req.body);

  const newUser = new userModel({
    name: req.body.name,
  });
  await newUser.save();

  console.log("New name in DB ->", newUser);
  res.json({ result: true, newUser });
});



module.exports = router;
