import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MySQL Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Middleware to Authenticate JWT Token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "ไม่มีโทเค็น!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "โทเค็นไม่ถูกต้อง!" });
  }
};

// ✅ User Registration Route (Sign Up)
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if email already exists
    const [existingUsers] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUsers.length > 0) {
      connection.release();
      return res.status(400).json({ message: "อีเมลนี้มีอยู่ในระบบแล้ว" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    await connection.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    connection.release();
    res.json({ message: "สมัครสมาชิกสำเร็จ!" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดของเซิร์ฟเวอร์", error });
  }
});

// ✅ User Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🔍 Login Request:", email); // Debugging log

  try {
    const connection = await pool.getConnection();

    // Check if user exists
    const [users] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      connection.release();
      return res.status(400).json({ message: "ไม่พบบัญชีผู้ใช้นี้!" });
    }

    const user = users[0];

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      connection.release();
      return res.status(400).json({ message: "รหัสผ่านไม่ถูกต้อง!" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    connection.release();
    console.log("✅ Login Successful:", token);
    res.json({ message: "เข้าสู่ระบบสำเร็จ!", token });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดของเซิร์ฟเวอร์", error });
  }
});

// ✅ Protected Route: Get User Profile
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [user] = await connection.execute(
      "SELECT id, name, email FROM users WHERE id = ?",
      [req.user.id]
    );
    connection.release();

    res.json({ user: user[0] });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดของเซิร์ฟเวอร์", error });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
