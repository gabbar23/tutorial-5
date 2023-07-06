const users = require("../users");

const userAdd = async (req, res) => {
  const reqBody = req.body;
  const isEmailPresent = "email" in reqBody;
  const isFirstNamePresent = "firstName" in reqBody;
  try {
    if (
      isEmailPresent === false ||
      isFirstNamePresent === false ||
      Object.keys(req.body).length > 2
    ) {
      res.status(400).json({
        message: "Bad request",
        success: false,
      });
    } else {
      const checkUserPresent = users.findIndex(
        (usr) => usr.email === reqBody["email"]
      );
      if (checkUserPresent == -1) {
        reqBody["id"] = (Date.now() + users.length).toString();
        users.push(reqBody);

        res.status(201).json({
          message: "User added",
          success: true,
        });
      } else {
        res.status(400).json({
          message: "Bad request. User already present with the same email",
          success: false,
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

module.exports = { userAdd };
