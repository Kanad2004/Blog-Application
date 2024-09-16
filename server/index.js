const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "asafasfadfadfadwtergerghrytrurt";

mongoose.connect(
  "mongodb+srv://kanadkulkarni2013:Kanad2004@cluster0.qnfzl.mongodb.net/blog-database"
);

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    //logged in
    jwt.sign(
      {
        username,
        id: userDoc._id,
      },
      secret,
      {},
      (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("token", token).json("ok");
      }
    );
    // res.json()
  } else {
    res.status(400).json("Wrong credentials");
  }
});

app.listen(8000);
