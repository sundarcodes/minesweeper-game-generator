import { Grid } from './../game-building-blocks/grid';

export enum GameLevel {
    Easy,
    Intermediate,
    Tough
}

export interface GameDifficuty {
    openFirstCell(row: number, col: number): Grid;
}