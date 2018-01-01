import { GameLevel } from './game-difficulty/game-difficulty';
import game from './game';

import * as R from 'ramda';

// Create a Game Object
const initialGameState = game.initGame(GameLevel.Easy);
const state = game.openCell(initialGameState, 5 ,4);
game.displayGrid(state.grid);
game.displaySolvedGrid(state.grid);
// R.pipe()



// Randomly open some cells
// let turns = 20;
// while(turns > 0) {
//     const ret = ;
//     mineSweeper.displayGrid();
//     turns--;
// }

// Keep playing till you get busted
// while(mineSweeper.openCell(Math.floor(Math.random()*8), Math.floor(Math.random()*9)) != -1) {
//     mineSweeper.displayGrid();
// }

// mineSweeper.displayNakedGrid();
