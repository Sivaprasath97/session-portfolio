const express = require('express');
const router = express.Router();
const Details = require('../models/Details');

/**
 * POST /api/contact
 * Saves a new contact form submission to MongoDB Atlas
 * Collection: details (in session_portfolio database)
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic presence validation (schema-level validation runs after this)
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, message) are required.',
      });
    }

    // Create and save the document
    const newEntry = new Details({ name, email, subject, message });
    const saved = await newEntry.save();

    console.log(`✅ Contact saved — ID: ${saved._id} | From: ${email}`);

    return res.status(201).json({
      success: true,
      message: 'Your message has been received! I will get back to you within 24 hours.',
      data: {
        id: saved._id,
        name: saved.name,
        email: saved.email,
        subject: saved.subject,
        createdAt: saved.createdAt,
      },
    });
  } catch (error) {
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }

    console.error('❌ Contact save error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

/**
 * GET /api/contact
 * Returns all contact submissions (for admin review)
 */
router.get('/', async (req, res) => {
  try {
    const entries = await Details.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: entries.length,
      data: entries,
    });
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
