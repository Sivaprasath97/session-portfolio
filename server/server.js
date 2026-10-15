require('dotenv').config();
if (!process.env.VERCEL) {
  // Node on the local dev machine defaults to a 127.0.0.1 DNS server that refuses the SRV lookup mongodb+srv:// needs.
  require('dns').setServers(['8.8.8.8', '1.1.1.1']);
}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// ─── MongoDB Connection ───────────────────────────────────────────────────────

// Cached so warm serverless invocations reuse the existing connection.
let connectionPromise = null;
function connectDB() {
  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(MONGODB_URI, { dbName: 'session_portfolio' })
      .then(() => console.log('✅ Connected to MongoDB Atlas — database: session_portfolio'))
      .catch((err) => {
        connectionPromise = null;
        throw err;
      });
  }
  return connectionPromise;
}

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(cors({
  origin: [
    'http://localhost:5173',  // Vite dev server
    'http://localhost:4173',  // Vite preview
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    res.status(503).json({ success: false, message: 'Database unavailable. Please try again later.' });
  }
});

// ─── Routes ───────────────────────────────────────────────────────────────────

app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ─── Start (local only — on Vercel the exported app is invoked per request) ──

if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        console.log(`   Health check: http://localhost:${PORT}/api/health`);
      });
    })
    .catch((err) => {
      console.error('❌ MongoDB connection failed:', err.message);
      process.exit(1);
    });

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed. Server shutting down.');
    process.exit(0);
  });
}

module.exports = app;
