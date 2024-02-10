const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picturePath: { type: String },
  statement: { type: String },
});

userSchema.index({ username: 1, email: 1 }); // Apply appropriate indexes

module.exports = mongoose.model('User', userSchema);
