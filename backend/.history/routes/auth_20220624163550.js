const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//Create a user using :POST "/api/auth/createuser".No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this  email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists " });
      }
      // Create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ nice: "nice" });
    } 
    
    catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
