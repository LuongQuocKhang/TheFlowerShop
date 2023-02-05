var jwt = require('jsonwebtoken');

const isAuthenticated = function(req, res, next) {
    var jsonResponse = {
        data: {},
        success: true,
        message: ""
    }
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') 
        {
            var jwtToken = req.headers.authorization.split(' ')[1];
            jwt.verify(jwtToken, process.env.JWT_SECRECT, function(err, payload) {
                console.log(err);
                console.log(payload);
                var jsonResponse = {
                    data: {},
                    success: true,
                    message: ""
                }
            })
        }
}

module.exports = {
    isAuthenticated
};