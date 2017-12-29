import { GameLevel } from './game-difficulty/game-difficulty';
import { Game } from './game';

// Create a Game Object
const mineSweeper = new Game();
mineSweeper.setDifficulty(GameLevel.Easy);
mineSweeper.openCell(5, 4);
mineSweeper.displayGrid();


// Randomly open some cells
let turns = 20;
while(turns > 0) {
    mineSweeper.openCell(Math.floor(Math.random()*8), Math.floor(Math.random()*9));
    mineSweeper.displayGrid();
    turns--;
}

mineSweeper.displayNakedGrid();
