"use strict";
exports.__esModule = true;
var User = (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            this.email === another.name &&
            this.password === another.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    'juliana@gmail.com': new User('Juliana', 'juliana@gmail.com', 'senha123'),
    'carlos@gmail.com': new User('Carlos Cezareti', 'edu.cezareti@gmail.com', 'senha321')
};
