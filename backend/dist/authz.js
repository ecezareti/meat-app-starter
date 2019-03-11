"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (req, res, next) {
    var token = extractToken(req);
    if (token === undefined) {
        res.setHeader('www-Authenticate', 'Bearer token_type="JWT');
        res.status(401).json({ message: 'Você precisa se autenticar' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secrect, function (error, decoded) {
            if (!decoded) {
                res.status(403).json({ message: 'Não autorizado' });
                return;
            }
            next();
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers !== undefined && req.headers.authorization !== undefined) {
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            return parts[1];
        }
    }
    return token;
}
