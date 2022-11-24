const mongoose = require("mongoose");
var bcrypt = require('bcrypt');

const TBL_ADM_ACCOUNT_Schema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true, default: "" },
        hash_password: { type: String, required: true, default: "" },
        email: { type: String, lowercase: false, trim: true, default: "" },
        created_date: { type: String, lowercase: false, trim: true, default: "" },
        first_name: { type: String, lowercase: false, trim: true, default: "" },
        last_name: { type: String, lowercase: false, trim: true, default: "" },
        birth_date: { type: String, lowercase: false, trim: true, default: "" },
        avatar: { type: String, lowercase: false, trim: true, default: "" },
        last_login_time: { type: String, lowercase: false, trim: true, default: "" },
        user_Type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TBL_MST_ACCOUNT_TYPE"
        },
        wallets: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TBL_ADM_WALLET"
        }
    }, {
    collection: 'TBL_ADM_ACCOUNT'
}
)

// comparePassword
TBL_ADM_ACCOUNT_Schema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('TBL_ADM_ACCOUNT', TBL_ADM_ACCOUNT_Schema);