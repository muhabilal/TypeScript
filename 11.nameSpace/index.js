var UserUtils;
(function (UserUtils) {
    var users = /** @class */ (function () {
        function users() {
        }
        users.prototype.getName = function () {
            return "Bilal Dar";
        };
        return users;
    }());
    UserUtils.users = users;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.users();
console.log(u1.getName());
