const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Loads .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => res.send("✅ Quiz Backend is running!"));

// Quiz routes
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);

// Port and Mongo URI
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Check Mongo URI
if (!MONGO_URI) {
  console.error("❌ MONGO_URI missing in .env file");
  process.exit(1);
}

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
