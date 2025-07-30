const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  id: String,
  title: String,
  status: String,
  questionsCount: Number,
  tags: [String],
  questions: [
    {
      question: String,
      options: [String],
      answer: Number
    }
  ]
});

module.exports = mongoose.model("Quiz", quizSchema);
