const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: String,
  price: Number,
  volume: Number, // total shares in circulation
  availableShares: { type: Number, default: 0 },
  volatility: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },
  
  lastUpdated: Date,
  history: [Number],
});

module.exports = mongoose.model("Stock", StockSchema);
