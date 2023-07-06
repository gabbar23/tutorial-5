const users = require("../users");
const userUpdate = async (req, res) => {
  const userid = req.params.id;
  const reqBody = req.body;
  const isEmailPresent = "email" in reqBody;
  const isFirstNamePresent = "firstName" in reqBody;
  try {
    if (users.length === 0) {
      res.status(404).json({
        message: "No user found",
        success: false,
      });
    }

    if (isEmailPresent === false && isFirstNamePresent === false) {
      res.status(400).json({
        message: "Bad request",
        success: false,
      });
    } else {
      const userIdx = users.findIndex((usr) => usr.id === userid);
      if (userIdx === -1) {
        res.status(404).json({
          message: "No user found",
          success: false,
        });
      } else {
        if (isEmailPresent) users[userIdx].email = reqBody["email"];

        if (isFirstNamePresent) users[userIdx].firstName = reqBody["firstName"];

        res.status(200).json({
          message: "User updated",
          success: true,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { userUpdate };
