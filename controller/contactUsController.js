const ContactUs = require('../model/contactUsModel')
require('dotenv').config()

const contactUsController = {
    createConnectus: async (req,res) => {
        try {
            let contactUs = await ContactUs.create(req.body);
            res.json({msg: "Contact Us data registered successfully",contact: contactUs} )
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = contactUsController