"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_difficulty_1 = require("./game-difficulty/game-difficulty");
var game_1 = require("./game");
// Create a Game Object
var mineSweeper = new game_1.Game();
mineSweeper.setDifficulty(game_difficulty_1.GameLevel.Easy);
mineSweeper.openCell(5, 4);
mineSweeper.displayGrid();
