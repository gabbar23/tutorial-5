const express = require("express");
const usersAll = require("../controllers/usersAll");
const userSingle = require("../controllers/userSingle");
const userUpdate = require("../controllers/userUpdate");
const userAdd = require("../controllers/userAdd");
const router = express.Router();

router.get("/users", usersAll.usersAll);
router.get("/user/:id", userSingle.userSingle);
router.put("/update/:id", userUpdate.userUpdate);
router.post("/add", userAdd.userAdd);

module.exports = {
  routes: router,
};
