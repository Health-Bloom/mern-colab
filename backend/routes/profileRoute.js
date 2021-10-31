const express = require('express');
const router = express.Router();

const { getUserProfilePage } = require('../controllers/profileController');


router.route("/profile") 
        .get(getUserProfilePage)

module.exports = router;