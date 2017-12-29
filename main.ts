import { GameLevel } from './game-difficulty/game-difficulty';
import { Game } from './game';

// Create a Game Object
const mineSweeper = new Game();
mineSweeper.setDifficulty(GameLevel.Easy);
mineSweeper.openCell(5, 4);
mineSweeper.displayGrid();
