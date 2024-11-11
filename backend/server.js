const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const memberRoutes = require("./routes/memberRoutes");  // <-- Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed", err));

// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Routes
app.use('/api', memberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
