const mongoose = require("mongoose");


const walletSchema = new mongoose.Schema(
    {
        user_id: { 
            type: String, 
            unique: true, 
            type: mongoose.Schema.Types.ObjectId,
            ref: "TBL_ADM_ACCOUNT",
            required: true 
        },
        address: { type: String, unique: true, required: true },
        wallet_details: { type: Array, unique: false, required: false }
    }, {
        collection: 'TBL_ADM_WALLET'
    }
)


module.exports = mongoose.model('TBL_ADM_WALLET', walletSchema);