// تحميل متغيرات البيئة
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");

// مسارات الـ API
const authRoutes = require("../routes/employee.routes");
const assetRoutes = require("../routes/asset.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);

app.get("/", (req, res) => {
  res.send("✅ API working...");
});

// الاتصال بقاعدة البيانات
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  try {
    console.log("Connecting to:", process.env.MONGO_URL); // لفحص الرابط
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
}

// تشغيل السيرفر المحلي في بيئة التطوير فقط
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  app.listen(port, async () => {
    await connectToDatabase();
    console.log(`🚀 Server running locally on http://localhost:${port}`);
  });
}

// في حالة استخدام Netlify Functions
module.exports.handler = async (event, context) => {
  await connectToDatabase();
  return serverless(app)(event, context);
};
