const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/user-controller");
const { userAuthVerification } = require("../middleware/auth-middlware");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/auth", userAuthVerification);
userRouter.post("/logout", logout);

module.exports = userRouter;
