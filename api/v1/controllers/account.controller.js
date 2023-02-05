var jwt = require('jsonwebtoken');
const TBL_ADM_ACCOUNT = require('../models/account/TBL_ADM_ACCOUNT');
const login = async (req, res) => {

    var email = req.body.userName;
    var password = req.body.password;

    try {
        const userAccount = await TBL_ADM_ACCOUNT.findOne({"email": email});

        if(userAccount != null)
        {
            if (email === userAccount.email && userAccount.comparePassword(password)) {
            var payload = { email: email };
            var jwtToken = jwt.sign(payload, process.env.JWT_SECRECT,
                                    {
                                        expiresIn: 1 * 60 * 60
                                    });

            var jsonResponse = {
                'access_token': jwtToken,
                'expiresIn': 1 * 60 * 60,
                "id": userAccount._id
            };
            res.json(jsonResponse)
        }
        else {
            res.json({ error: 'Login Error' })
        }
        }
        else {
            res.json({ error: 'Account Not Existing!' })
        }
    } catch (error) {
        console.log(error);
        res.json({ error: error })
    }


}
const register = async (req, res) => {
    res.json({ error: 'register Error' });
}
const resetPassword = async (req, res) => {
    res.json({ error: 'resetPassword Error' });
}

module.exports = {
    login,
    register,
    resetPassword
};