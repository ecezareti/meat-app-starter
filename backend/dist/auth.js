"use strict";
exports.__esModule = true;
var user_1 = require("./user");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = user_1.users[user.email];
        res.json({
            name: dbUser.name,
            email: dbUser.email
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
