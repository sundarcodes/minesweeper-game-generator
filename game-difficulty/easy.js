"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = require("../game-building-blocks/grid");
var MAX_ROWS = 10;
var MAX_COLS = 10;
var MAX_MINES = 10;
var EasyLevel = /** @class */ (function () {
    function EasyLevel() {
    }
    EasyLevel.prototype.openFirstCell = function (row, col) {
        var grid = this.placeMines(row, col);
        grid.updateMineInfo();
        return grid;
    };
    EasyLevel.prototype.placeMines = function (rowNumClicked, colNumClicked) {
        var grid = new grid_1.Grid(MAX_ROWS, MAX_COLS);
        var numberOfMinesPlaced = 0;
        while (numberOfMinesPlaced < MAX_MINES) {
            var colNumToBePlaced = Math.floor(Math.random() * MAX_COLS);
            var rowNumToBePlaced = Math.floor(Math.random() * MAX_ROWS);
            if (grid.isCellAMine(rowNumToBePlaced, colNumToBePlaced) ||
                (rowNumClicked === rowNumToBePlaced && colNumClicked === colNumToBePlaced)) {
                continue;
            }
            grid.markCellAsMine(rowNumToBePlaced, colNumToBePlaced);
            numberOfMinesPlaced++;
        }
        return grid;
    };
    return EasyLevel;
}());
exports.EasyLevel = EasyLevel;
