const express = require("express");
const router = express.Router();
const axios = require("axios");
const Quiz = require("../models/Quiz");

router.post("/generate", async (req, res) => {
  const { topic, id } = req.body;
  if (!topic || !id) return res.status(400).json({ error: "Topic and id are required" });

  const prompt = `Generate 5 multiple choice quiz questions on the topic "${topic}". Respond in JSON format like:
[
  {
    "question": "What is JSX?",
    "options": ["A templating engine", "A JavaScript extension", "A CSS preprocessor", "A type checker"],
    "answer": 1
  },
  ...
]`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const output = response.data.choices?.[0]?.message?.content || "";
    let questions = [];

    try {
      questions = JSON.parse(output);
    } catch (err) {
      return res.status(500).json({ error: "Failed to parse AI response", raw: output });
    }

    const newQuiz = new Quiz({
      id,
      title: topic,
      status: "Generated",
      questionsCount: questions.length,
      tags: topic.toLowerCase().split(" "),
      questions
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    console.error("OpenRouter Error:", err.response?.data || err.message);
    res.status(500).json({ error: "❌ Failed to generate quiz from AI" });
  }
});

module.exports = router;
