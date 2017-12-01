export enum CellContent {
    mine = -1,
    blank = 0,
    one = 1,
    two = 2,
    three = 3,
    four = 4
}

export class Cell {
    private _content: CellContent;
    private isOpened: boolean;
    constructor(private row: number, private col: number) {
        this.isOpened = false;
    }

    get content(): CellContent {
        return this._content;
    }

    set content(value: CellContent) {
        this._content = value;
    }

    isContentAMine(): boolean {
        return this._content === CellContent.mine; 
    }

    isCellOpenedAlready() {
        return 
    }

}