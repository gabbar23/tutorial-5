const users = require("../users");
const usersAll = async (req, res) => {
  try {
    if (users.length === 0) {
      res.status(404).json({
        message: "No user found",
        success: false,
      });
    } else {
      res.status(200).json({
        message: "Users retrieved",
        success: true,
        users: users,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { usersAll };
