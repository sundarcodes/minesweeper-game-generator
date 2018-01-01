import gridUtil, { Grid } from './game-building-blocks/grid';
import { GameLevel } from './game-difficulty/game-difficulty';
import {
    openFirstCell as easyLevel, MAX_COLS as MAX_COLS_FOR_EASY,
    MAX_ROWS as MAX_ROWS_FOR_EASY
} from './game-difficulty/easy';

import * as R from 'ramda';

export interface GameState {
    movesCount: number;
    grid: Grid;
    isGameOver: boolean;
    difficultyLevel: GameLevel;
}

const initGame = (difficultyLevel: GameLevel): GameState => {
    let grid: Grid = [];
    switch (difficultyLevel) {
        case GameLevel.Easy:
            grid = gridUtil.createGrid(MAX_ROWS_FOR_EASY, MAX_COLS_FOR_EASY);
            break;
        case GameLevel.Intermediate:
            // Create Intermediate Level
            break;
        case GameLevel.Tough:
            // Create Tough Level
            break;
        default:
            console.log('Level not supported');
            break;
    }
    return {
        movesCount: 0,
        grid,
        isGameOver: false,
        difficultyLevel
    }
}

const displayGrid = (grid: Grid) => console.log(gridUtil.prettyFormatGrid(grid));

const displaySolvedGrid = (grid: Grid) => console.log(gridUtil.prettyFormatNakedGrid(grid));

const openCell = (gameState: GameState, row: number, col: number): GameState => {
    let newGrid: Grid = [];
    let newState: GameState;
    // Check if this is first cell being opened
    if (gameState.movesCount === 0) {
        newGrid = openFirstCell(gameState, row, col);
        newState = R.merge(gameState, { grid: newGrid});
    } else {
        newState = openSubsequentCell(gameState, row, col);
    }
    return newState;
}

const openSubsequentCell = (gameState: GameState, row: number, col: number): GameState => {
    let newState: GameState;
    let newGrid: Grid = [];
    // Check if cell to be opened is a mine
    if (gridUtil.isCellAMine(gameState.grid, row, col)) {
        newState = R.merge(gameState, {isGameOver: true});
    } else {
        newGrid = gridUtil.openCell(gameState.grid, row, col);
        newState = R.merge(gameState, { grid: newGrid});
    }
    return newState;
}

const openFirstCell = (gameState: GameState, row: number, col: number): Grid => {
    let grid: Grid = gameState.grid;
    switch (gameState.difficultyLevel) {
        case GameLevel.Easy:
            grid = easyLevel(gameState.grid, row, col);
            break;
        case GameLevel.Intermediate:
            // Create Intermediate Level
            break;
        case GameLevel.Tough:
            // Create Tough Level
            break;
        default:
            console.log('Level not supported');
            break;
    }
    return grid;
}

export default {
    initGame,
    displayGrid,
    displaySolvedGrid,
    openCell
}