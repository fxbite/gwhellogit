const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController');

// siteController.home
router.get('/', siteController.home)

module.exports = router;