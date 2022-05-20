const router = require("express").Router()
const User = require("../models/User")

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "shah",
    email: "shah@gmail.com",
    password: "201103",
  })
  await user.save()
  res.send("OK")
})

module.exports = router
