const { Router } = require("express");
const jwt = require("jsonwebtoken");
const blacklist = require("../blacklist");
const userModel = require("../models/user.model");
const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    const user = await userModel(req.body);
    await user.save();
    res.send("New User added");
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email, password });
    if (user) {
    //   const token = jwt.sign({ email: email }, "sharu", { expiresIn: "7d" });
      const token = jwt.sign({ email: email }, "sharu", { expiresIn: 20 });
      const refreshToken = jwt.sign({ email: email }, "luffy", {
        // expiresIn: "15d",
        expiresIn: 60,
      });
      res.send({ msg: "Login Successful", token, refreshToken });
      // res.send({"msg":"User Logged in Successfully",user})
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.send(error);
  }
});

//blacklist the token
userRouter.get("/logout", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.send("Login first");
  }
  blacklist.push(token);
  /*
  
  */
  res.send("User logged out");
});

//We use refresh token to generate new token again
userRouter.get("/refreshToken", (req, res) => {
    const { email, password } = req.body;
  const rToken = req.headers.authorization?.split(" ")[1];
  if (!rToken) {
    res.send("Login Again!!");
  }
  jwt.verify(rToken, "luffy", (err, decoded) => {
    if (decoded) {
      const token = jwt.sign({ email: email }, "sharu", { expiresIn: "7d" });
      res.send({ token });
    } else {
      res.send("Invalid Token!!");
    }
  });
});

module.exports = userRouter;
