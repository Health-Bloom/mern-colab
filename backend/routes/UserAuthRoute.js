const express = require('express');
const router = express.Router();

const { getSignUpPage, signUpUser, getSignInPage,signInUser } = require('../controllers/userAuthController');

router.route("/signUp") 
        .get(getSignUpPage)
        .post(signUpUser);

router.route("/signIn") 
        .get(getSignInPage)
        .post(signInUser);

module.exports = router;