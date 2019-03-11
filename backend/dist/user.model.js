"use strict";
exports.__esModule = true;
var User = (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = {
    'juliana@gmail.com': new User('Juliana', 'juliana@gmail.com', 'senha123'),
    'carlos@gmail.com': new User('Carlos', 'carlos@gmail.com', 'senha321')
};
