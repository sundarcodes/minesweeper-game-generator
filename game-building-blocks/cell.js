"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell = /** @class */ (function () {
    function Cell(row, col) {
        this.row = row;
        this.col = col;
        this.isOpened = false;
        this.isMine = false;
    }
    Object.defineProperty(Cell.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.isContentAMine = function () {
        return this.isMine;
    };
    Cell.prototype.isCellOpened = function () {
        return this.isOpened;
    };
    Cell.prototype.setContentAsMine = function () {
        this._content = -1;
        this.isMine = true;
    };
    return Cell;
}());
exports.Cell = Cell;
