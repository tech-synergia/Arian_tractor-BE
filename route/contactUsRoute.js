const router = require('express').Router()
const contactUsController = require('../controller/contactUsController')

router.post(`/create`, contactUsController.createConnectus)

module.exports = router