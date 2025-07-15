const express = require("express");
const Application = require("../models/Application");
const router = express.Router();

router.post("/", async (req, res) => {
  const { job_id, name, email, resume_link, cover_letter } = req.body;
  const newApp = new Application({
    job_id,
    name,
    email,
    resume_link,
    cover_letter,
  });
  await newApp.save();
  res.status(201).json({ message: "Application submitted" });
});

router.get("/", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
