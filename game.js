"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_difficulty_1 = require("./game-difficulty/game-difficulty");
var easy_1 = require("./game-difficulty/easy");
var Game = /** @class */ (function () {
    function Game() {
        this.movesCount = 0;
    }
    Game.prototype.reset = function () {
        this.movesCount = 0;
    };
    Game.prototype.openCell = function (row, col) {
        if (this.movesCount === 0) {
            this.grid = this.difficultyLevel.openFirstCell(row, col);
        }
        else {
        }
    };
    Game.prototype.setDifficulty = function (level) {
        switch (level) {
            case game_difficulty_1.GameLevel.Easy:
                this.difficultyLevel = new easy_1.EasyLevel();
                break;
            case game_difficulty_1.GameLevel.Intermediate:
                // Create Intermediate Level
                break;
            case game_difficulty_1.GameLevel.Tough:
                // Create Tough Level
                break;
            default:
                console.log('Level not supported');
                break;
        }
    };
    Game.prototype.displayGrid = function () {
        this.grid.printGrid();
    };
    return Game;
}());
exports.Game = Game;
