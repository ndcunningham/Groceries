"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require('email-validator');
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUU3QztJQUFBO0lBTUEsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgnZW1haWwtdmFsaWRhdG9yJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGlzVmFsaWRFbWFpbCgpIHtcclxuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==