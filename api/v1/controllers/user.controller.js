var jwt = require('jsonwebtoken');
const TBL_ADM_ACCOUNT = require('../models/account/TBL_ADM_ACCOUNT');
const TBL_ADM_WALLET = require('../models/wallet/TBL_ADM_WALLET');

const getAccountInfo = async (req, res) => {
    try {
        var jsonResponse = {
            data: {},
            success: true,
            message: ""
        }
        var account = {};
        if (req.headers &&
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer') {
            var jwtToken = req.headers.authorization.split(' ')[1];
            jwt.verify(jwtToken, process.env.JWT_SECRECT, async function (err, payload) {
                const userAccount = await TBL_ADM_ACCOUNT
                    .findOne({ "id": req.body.id })
                    .populate("wallets");

                if (userAccount != null) {
                    console.log("test");
                    account = {
                        _id: userAccount._id,
                        email: userAccount.email,
                        wallets: userAccount.wallets,
                        first_name: userAccount.first_name,
                        last_name: userAccount.last_name
                    };

                    jsonResponse.data = account;
                    res.json(jsonResponse)
                }
            })
        }
        else {
            jsonResponse = {
                data: {},
                success: false,
                message: "access token expired"
            }
        }
    }

    catch (error) {
        console.log(error);
        res.json({ error: error })
    }

}
module.exports = {
    getAccountInfo
};