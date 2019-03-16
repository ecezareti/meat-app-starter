var LeaveOrderGuard = /** @class */ (function () {
    function LeaveOrderGuard() {
    }
    LeaveOrderGuard.prototype.canDeactivate = function (component, currentRoute, currentState) {
        if (!component.isOrderCompleted()) {
            return window.confirm('Sua compra não foi concluída, deseja realmente sair?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());
export { LeaveOrderGuard };
//# sourceMappingURL=leave-order.guard.js.map