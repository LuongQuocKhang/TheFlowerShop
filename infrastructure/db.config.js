const mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

// Connect MongoDB database
const connect = () => {
    // console.log(process.env.DB_CONNECTION_STRING);
    mongoose.connect(process.env.DB_CONNECTION_STRING,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (error) => {
            if(error) console.log(error)
        }
    )
}
module.exports = {
    connect
}