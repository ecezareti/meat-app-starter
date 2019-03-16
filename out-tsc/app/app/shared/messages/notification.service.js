import { EventEmitter } from '@angular/core';
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.messageEmitter = new EventEmitter();
    }
    NotificationService.prototype.notify = function (message) {
        this.messageEmitter.emit(message);
    };
    return NotificationService;
}());
export { NotificationService };
//# sourceMappingURL=notification.service.js.map