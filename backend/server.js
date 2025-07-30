const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => res.send("Quiz Backend is running!"));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err));
