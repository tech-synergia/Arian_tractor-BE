const mongoose = require('mongoose')

const contactusSchema = new mongoose.Schema({
    userName:{
        type: String,
        trim: true
    },
    phoneNumber:{
        type: String,
        trim: true,
        unique: [true, "mobile already exists."]
    },
    email:{
        type: String,
        trim: true,
        unique: [true, "email already exists."]
    },
    enquiry:{
        type: String,
        trim: true
    },
    location:{
        type: String,
        trim: true
    }
},{
    collection: 'contactUs',
    timestamps: true
})

module.exports = mongoose.model("ContactUs", contactusSchema)