var CartItem = /** @class */ (function () {
    function CartItem(item, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.item = item;
        this.quantity = quantity;
    }
    CartItem.prototype.value = function () {
        return this.item.price * this.quantity;
    };
    return CartItem;
}());
export { CartItem };
//# sourceMappingURL=cart-item.model.js.map