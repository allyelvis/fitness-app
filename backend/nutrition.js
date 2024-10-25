const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  },
  meals: [{
    name: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  }]
});

module.exports = mongoose.model('Nutrition', nutritionSchema);
