const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  exercises: [{
    name: String,
    sets: Number,
    reps: Number
  }]
});

module.exports = mongoose.model('Workout', workoutSchema);
