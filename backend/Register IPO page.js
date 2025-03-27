//create file

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ipoDB?retryWrites=true&w=majority
PORT=5000
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

//db.js – MongoDB Connection
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected...');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

//models/IPO.js – Mongoose Schema

const mongoose = require('mongoose');

const ipoSchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  pricePerShare: { type: Number, required: true },
  totalShares: { type: Number, required: true },
  openDate: { type: Date, required: true },
  closeDate: { type: Date, required: true },
  logo: { type: String, required: true },  // Store logo filename
  createdAt: { type: Date, default: Date.now }
});

// Normalize data before saving
ipoSchema.pre('save', function (next) {
  this.companyName = this.companyName.trim();
  this.openDate = new Date(this.openDate);
  this.closeDate = new Date(this.closeDate);
  next();
});

const IPO = mongoose.model('IPO', ipoSchema);

module.exports = IPO;

module.exports = connectDB;

//routes/ipoRoutes.js – API Endpointsconst express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const IPO = require('../models/IPO');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

// ✅ Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Store logos in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// ✅ Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ POST: Register new IPO
router.post('/register', upload.single('logo'), async (req, res) => {
  try {
    const { companyName, pricePerShare, totalShares, openDate, closeDate } = req.body;
    const logo = req.file ? req.file.filename : null;

    if (!logo) {
      return res.status(400).json({ message: 'Logo upload failed' });
    }

    // Validate required fields
    if (!companyName || !pricePerShare || !totalShares || !openDate || !closeDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const ipo = new IPO({
      companyName,
      pricePerShare,
      totalShares,
      openDate,
      closeDate,
      logo
    });

    await ipo.save();

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'admin@example.com',
      subject: 'New IPO Registered',
      text: `A new IPO has been registered: ${companyName}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'IPO registered successfully', ipo });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET: Fetch All IPOs
router.get('/', async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.status(200).json(ipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch IPOs' });
  }
});

module.exports = router;

//server.js – Main Server
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const ipoRoutes = require('./routes/ipoRoutes');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/ipos', ipoRoutes);

app.get('/', (req, res) => {
  res.send('IPO Registration API is running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});






