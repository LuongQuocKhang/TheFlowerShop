const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TBL_ADM_FLOWER_SCHEMA = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    promotion: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    isSale: {
        type: Boolean,
        required: false
    }
});


module.exports = mongoose.model('TBL_ADM_FLOWER', TBL_ADM_FLOWER_SCHEMA)