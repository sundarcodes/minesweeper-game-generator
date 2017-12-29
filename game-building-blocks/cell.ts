
export class Cell {
    private _content: number;
    private isOpened: boolean;
    private isMine: boolean;
    constructor(private row: number, private col: number) {
        this.isOpened = false;
        this.isMine = false;
    }

    get content(): number {
        return this._content;
    }

    set content(value: number) {
        this._content = value;
    }

    isContentAMine(): boolean {
        return this.isMine;
    }

    isCellOpened() {
        return this.isOpened;
    }

    openCell() {
        this.isOpened = true;
    }

    setContentAsMine() {
        this._content = -1;
        this.isMine = true;
    }

}