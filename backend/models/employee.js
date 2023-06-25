const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{timestamps: true})

exports.Employee = mongoose.model("Employees",employeeSchema);