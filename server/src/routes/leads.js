import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// POST /api/leads (create a lead)
router.post("/", async (req, res) => {
  try {
    const { name, email, company, budget, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
    }

    const lead = await Lead.create({ name, email, company, budget, service, message });
    return res.status(201).json({ ok: true, leadId: lead._id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Server error. Try again later." });
  }
});

// GET /api/leads (simple admin list - optional)
router.get("/", async (_req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(50);
    return res.json({ ok: true, leads });
  } catch {
    return res.status(500).json({ ok: false, error: "Server error." });
  }
});

export default router;
