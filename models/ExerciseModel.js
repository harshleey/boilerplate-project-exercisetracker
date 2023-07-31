const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
  description: { type: String, required: true},
  duration: { type: Number, required: true },
  date: { type: String, required: true },
  userId: { type: String },
})

module.exports = mongoose.model('Exercise', ExerciseSchema)