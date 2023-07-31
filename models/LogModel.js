const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
  description: { type: String, required: true},
  duration: { type: Number, required: true },
  date: { type: String, required: true },
  userId: { type: String },
})

module.exports = mongoose.model('Log', LogSchema)