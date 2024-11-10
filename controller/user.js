const pool = require("../config/db");

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username, !email || !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await pool.query(
      `SELECT username, email, password FROM Users WHERE username = ? or email = ?`,
      [username, email]
    );

    if (existingUser[0].length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    await pool.query(
      `INSERT INTO Users(username , email, password) VALUES(?, ?, ?)`,
      [username, email, password]
    );
    res.status(201).json({ message: "sign up successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  signUp,
};
