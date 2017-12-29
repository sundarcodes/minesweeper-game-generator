import { Grid } from './../game-building-blocks/grid';

export enum GameLevel {
    Easy,
    Intermediate,
    Tough
}

export interface GameDifficuty {
    openFirstCell(grid: Grid, row: number, col: number): Grid;
    maxRows(): number;
    maxCols(): number;
}