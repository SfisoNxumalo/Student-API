const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentNumber: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  course: { type: String, required: true }


});



module.exports = mongoose.model('Student', studentSchema);
