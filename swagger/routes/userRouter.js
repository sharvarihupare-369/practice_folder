const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

/**
 * @swagger 
 * components:
 *   schemas:
 *      User:
 *         type: object
 *        properties:
 *              _id:
 *             type :String
 *             description: The auto-generated id of the user
 *             name:
 *             type :String
 *             description: The username
 *             age:
 *             type :integer
 *             description: The user's age

/**
 * @swagger 
 * /users:
 *   get:
 *      summary:  This will get all the user data from the database 
 *      responses :
 *            200:
 *                description : The list of all the users
 *                content :
 *                    application/json:
 *                        schema :
 *                            type: array
 *                            item:
 *                                $ref: "#/components/schemas/User"
 */

router.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

router.post("/create", async (req, res) => {
  const payload = req.body;
  const user = await UserModel.create(payload);
  res.send("New user has been added", user);
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const updateduser = await UserModel.findByIdAndUpdate({ _id: id }, payload);
  res.send({ msg: "User details has been updated" });
});

router.patch("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const updateduser = await UserModel.findByIdAndDelete({ _id: id });
  res.send({ msg: "User details has been deleted" });
});

module.exports = router;
