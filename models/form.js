const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
    email: {
        type: String,
        // required: true,
    },
    fullname: {
        type: String,
        required : true,
    },
    contactNumber: {
        type: Number,
        required : true,
    },
    degree : {
        type: String,
        required : true,
    },
    course: {
        type: String,
        required : true,
    },
    track : {
        type: String,
        required : true,
    },
    file : {
        type: Buffer,
        contentType: String
      
    }
    
});

const formModel = mongoose.model("formSub", formSchema);
module.exports = formModel;
