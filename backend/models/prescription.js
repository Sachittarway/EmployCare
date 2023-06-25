const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const presSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    sugar:{
        type: String,
        required: true
    },
    bp:{
        type: String,
        required: true
    },
    notesugar:{
        type: String,
        required: true
    },
    notebp:{
        type: String,
        required: true
    },
    sugars:{
        type: String,
        required: true
    },
    bps:{
        type: String,
        required: true
    },
    notesugars:{
        type: String,
        required: true
    },
    notebps:{
        type: String,
        required: true
    },
    sugarss:{
        type: String,
        required: true
    },
    bpss:{
        type: String,
        required: true
    },
    notesugarss:{
        type: String,
        required: true
    },
    notebpss:{
        type: String,
        required: true
    },
    
},{timestamps: true})

exports.prescriptionss = mongoose.model("Prescriptions",presSchema);