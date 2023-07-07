const mongoose = require('mongoose');

const employeeDetailsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true
  },
  employeeID: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

const EmployeeDetails = mongoose.model('EmployeeDetails', employeeDetailsSchema);
module.exports = EmployeeDetails;





