"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("./cell");
var Grid = /** @class */ (function () {
    function Grid(maxRow, maxColumn) {
        this.maxRow = maxRow;
        this.maxColumn = maxColumn;
        this.grid = [];
        for (var row = 0; row < maxRow; row++) {
            var colsArray = [];
            for (var col = 0; col < maxColumn; col++) {
                colsArray.push(new cell_1.Cell(row, col));
            }
            this.grid.push(colsArray);
        }
    }
    Grid.prototype.markCellAsMine = function (row, col) {
        var cell = this.grid[row][col];
        cell.setContentAsMine();
    };
    Grid.prototype.openCell = function (row, col) {
        // Check if the cell is a mine
        // If mine, you are a gonner
        // Else, open the cell and display/return the value
    };
    // setCell
    Grid.prototype.isCellAMine = function (row, col) {
        return this.grid[row][col].isContentAMine();
    };
    Grid.prototype.updateMineInfo = function () {
        // Go over the entire cells and mark 
        // cells with mine value indicators
        for (var row = 0; row < this.maxRow; row++) {
            for (var col = 0; col < this.maxColumn; col++) {
                // Continue if current cell is a mine
                // If not, compute the mines in adjacent cells and update the value
                var currentCell = this.grid[row][col];
                if (currentCell.isContentAMine()) {
                    continue;
                }
                var numberOfMines = this.getMinesCountForCell(row, col);
                currentCell.content = numberOfMines;
            }
        }
    };
    Grid.prototype.getMinesCountForCell = function (row, col) {
        // Check Left  
        var minesCount = 0;
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (i < 0 || j < 0 || i >= this.maxRow || j >= this.maxColumn) {
                    continue;
                }
                var cell = this.grid[i][j];
                // Skip when cell is undefined
                // or is the cell to get the count for
                // or cell content is not a mine
                if (!cell || (i === row && j === col) ||
                    !cell.isContentAMine()) {
                    continue;
                }
                minesCount++;
            }
        }
        return minesCount;
    };
    Grid.prototype.printGrid = function () {
        this.grid.forEach(function (row) {
            console.log(row.map(function (cell) { return cell.content; }).join(' ').replace(/-1/g, '*'));
        });
    };
    return Grid;
}());
exports.Grid = Grid;
