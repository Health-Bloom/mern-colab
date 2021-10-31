const UserSchema = require('../models/UserAuthModel');

module.exports.getSignUpPage = (req, res)=> {
        res.send('Debater');
}

module.exports.signUpUser = (req, res)=> {
//     const { Name, Email, Password } = req.body;
        res.send('Debater');
}

module.exports.getSignInPage = (req, res)=> {
        res.send('Debater');
}

module.exports.signInUser = (req, res)=> {
//     const { Name, Password } = req.body;
        res.send('Debater');
}
