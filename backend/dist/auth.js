"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var jtoken = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = user_1.users[user.email];
        var token = jtoken.sign({ sub: dbUser.email, iss: api_config_1.apiConfig.secrect }, 'meet-api-password');
        res.json({
            name: dbUser.name,
            email: dbUser.email,
            accessToken: token
        });
    }
    else {
        res.status(403).json({
            message: 'Usuário ou senha invalidos'
        });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = user_1.users[user.email];
    console.log(user);
    console.log(dbUser);
    return dbUser !== undefined && !dbUser.matches(user);
}
