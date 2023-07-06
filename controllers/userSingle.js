const users = require("../users");

const userSingle = async (req, res) => {
  const userid = req.params.id;
  try {
    if (users.length === 0) {
      res.status(404).json({
        message: "No user found",
        success: false,
      });
    } else {
      if (users.findIndex((usr) => usr.id === userid) === -1) {
        res.status(404).json({
          message: "No user found",
          success: false,
        });
      } else {
        res.status(200).json({
          success: true,
          users: users.find((usr) => usr.id === userid),
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

module.exports = { userSingle };
