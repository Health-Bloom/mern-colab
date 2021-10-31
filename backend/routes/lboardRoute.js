const express = require('express');
const router = express.Router();

const { getLBoardPage } = require('../controllers/lboardController');


router.route("/lBoard") 
        .get(getLBoardPage)

module.exports = router;