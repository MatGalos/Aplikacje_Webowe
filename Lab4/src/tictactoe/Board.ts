import Cell from "./Cell";
import StoredCell from "./StoredCell"
export default class Board {
    cells: Cell[];
    currentSymbol: number;
    tableSize: number;
    gameFinished: boolean;
    ableToUndoMove: boolean;
    ableToLoadGame: boolean;
    ableToSaveGame: boolean;
    constructor(size: number) {
        this.gameFinished = false;
        this.currentSymbol = 1;
        this.cells = new Array(size);
        this.tableSize = size;
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = "cell";
                const newCell = new Cell(cell, r, c);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false);
                i++;
            }
        }
        this.setHeaderValue(this.currentSymbol);
        this.createSavingButtons();
        this.ableToLoadGame = false;
        this.ableToUndoMove = false;
        this.ableToSaveGame = false;
        sessionStorage.clear();
        this.checkSessionButtonsState();
    }
    setHeaderValue(currSymbol: number): void {
        const header = <HTMLElement>document.getElementById('tttHeader');
        let val: string = "";
        switch (currSymbol) {
            case 1: {
                val = 'Current Move: Cross';
                break;
            }
            case -1: {
                val = 'Current Move: Circle';
                break;
            }
            case 10: {
                val = 'Winner is Cross';
                break;
            }
            case -10: {
                val = 'Winner is Circle';
                break;
            }
            case 0: {
                val = 'Draw!';
                break;
            }
        }
        header.innerHTML = val;
    }
    makeMove(cell: Cell): void {
        if (this.gameFinished)
            return;
        this.saveLastMove();
        if (cell.setCellValue(this.currentSymbol)) {
            if (this.checkForGameFinish()) {
                this.gameFinished = true;
                this.refreshSessionButtonsAvailability();
                return;
            }
            this.currentSymbol *= -1;
            this.setHeaderValue(this.currentSymbol);
        }
        this.checkSessionButtonsState();
    }

    checkForGameFinish(): boolean {
        const size = this.tableSize;
        let flag: boolean = false;
        if (this.rowCheck(size) || this.columnCheck(size) || this.diagonalCheck(size)) {
            this.setHeaderValue(this.currentSymbol * 10);
            flag = true;
        }
        if (!flag && this.tieCheck()) {
            this.setHeaderValue(0);
            flag = true;
        }
        if (flag) {
            this.ableToSaveGame = false;
            this.ableToUndoMove = false;
            this.ableToLoadGame = false;
        }
        return flag;
    }

    rowCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        const winningCells: Cell[] = [];

        if (cells.length < size) {
            return false;
        }
        for (let r = 0; r < size; r++) {
            let correctCellsInRow = 0;
            for (let c = 0; c < size; c++) {
                for (const cell of cells) {
                    if (cell.colPos === c && cell.rowPos === r) {
                        correctCellsInRow++;
                        winningCells.push(cell);
                    }
                }
            }
            if (correctCellsInRow === size) {
                for (const cell of winningCells) {
                    cell.htmlElement.classList.add('winningCell');
                }
                return true;
            }
            winningCells.length = 0;
        }
        return false;
    }
    columnCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        const winningCells: Cell[] = [];

        if (cells.length < size) {
            return false;
        }
        for (let c = 0; c < size; c++) {
            let correctCellsInColumn = 0;
            for (let r = 0; r < size; r++) {
                for (const cell of cells) {
                    if (cell.colPos === c && cell.rowPos === r) {
                        correctCellsInColumn++;
                        winningCells.push(cell);
                    }
                }
            }
            if (correctCellsInColumn === size) {
                for (const cell of winningCells) {
                    cell.htmlElement.classList.add('winningCell');
                }
                return true;
            }
            winningCells.length = 0;
        }
        return false;
    }
    diagonalCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        const winningCells: Cell[] = [];
        if (cells.length < size) {
            return false;
        }
        let correctCellsDiagonally: number = 0;
        for (let d = 0; d < size; d++) {
            for (const cell of cells) {
                if (cell.rowPos === d && cell.colPos === d) {
                    correctCellsDiagonally++;
                    winningCells.push(cell);
                }
            }
        }
        if (correctCellsDiagonally === size) {
            for (const cell of winningCells) {
                cell.htmlElement.classList.add('winningCell');
            }
            return true;
        }
        else {
            correctCellsDiagonally = 0;
            winningCells.length = 0;
        }
        for (let d = 0; d < size; d++) {
            for (const cell of cells) {
                if (cell.colPos === size - 1 - d && cell.rowPos === d) {
                    correctCellsDiagonally++;
                    winningCells.push(cell);
                }
            }
        }
        if (correctCellsDiagonally === size) {
            for (const cell of winningCells) {
                cell.htmlElement.classList.add('winningCell');
            }
            return true;
        }
        return false;
    }

   tieCheck(): boolean {
        const cellsFilled: Cell[] = this.cells.filter(cell => cell.cellValue == undefined || isNaN(cell.cellValue));
        if (cellsFilled.length === 0) {
            for (const cell of this.cells) {
                cell.htmlElement.classList.add('tieCell');
            }
            return true;
        }
        return false;
    }
    
    cellsWithActualSymbol(): Cell[] {
        const correctCells: Cell[] = [];
        for (const cell of this.cells) {
            if (cell.cellValue === this.currentSymbol)
                correctCells.push(cell);
        }
        return correctCells;
    }

    createSavingButtons(): void {
        const container = <HTMLElement>document.getElementById('gameContainer');
        const buttonHolder = <HTMLDivElement>document.createElement('div');
        buttonHolder.classList.add('buttonsHolder');

        const undoBtn = <HTMLButtonElement>document.createElement('button');
        undoBtn.innerHTML = 'Last move';
        undoBtn.classList.add('sessionBtn')
        undoBtn.setAttribute('id', 'undoBtn');
        undoBtn.setAttribute('disabled', 'true');
        undoBtn.addEventListener('click', () => {
            this.getLastMoveFromSS();
            this.clearAfterLoad();
        });

        const saveBtn = <HTMLButtonElement>document.createElement('button');
        saveBtn.innerHTML = 'Save game';
        saveBtn.classList.add('sessionBtn');
        saveBtn.setAttribute('id', 'saveBtn');
        saveBtn.setAttribute('disabled', 'true');
        saveBtn.addEventListener('click', () => this.saveGame())

        const loadBtn = <HTMLButtonElement>document.createElement('button');
        loadBtn.innerHTML = 'load game';
        loadBtn.classList.add('sessionBtn');
        loadBtn.setAttribute('id', 'loadBtn');
        loadBtn.setAttribute('disabled', 'true');
        loadBtn.addEventListener('click', () => {
            this.getGameFromLC();
            this.clearAfterLoad();
        })

        buttonHolder.appendChild(undoBtn);
        buttonHolder.appendChild(loadBtn);
        buttonHolder.appendChild(saveBtn);

        container.appendChild(buttonHolder)
    }

    checkSessionButtonsState(): void {
        const lastMoveAvailable = sessionStorage.getItem('lastMove');
        if (lastMoveAvailable) {
            this.ableToUndoMove = true;
        }
        else {
            this.ableToUndoMove = false;
        }
        const savedGameAvailable = localStorage.getItem('savedGameCells');
        if (savedGameAvailable) {
            this.ableToLoadGame = true;
        }
        else {
            this.ableToLoadGame = false;
        }
        const anyMoveOnBoard = this.cells.some(x => x.cellValue !== undefined);
        if (anyMoveOnBoard)
            this.ableToSaveGame = true;
        this.refreshSessionButtonsAvailability();
    }

    refreshSessionButtonsAvailability(): void {
        const loadBtn = document.getElementById('loadBtn');
        const saveBtn = document.getElementById('saveBtn');
        const undoBtn = document.getElementById('undoBtn');
        if (this.ableToUndoMove) {
            undoBtn?.removeAttribute('disabled');
        }
        else {
            undoBtn?.setAttribute('disabled', 'true');
        }

        if (this.ableToSaveGame) {
            saveBtn?.removeAttribute('disabled');
        }
        else {
            saveBtn?.setAttribute('disabled', 'true');
        }

        if (this.ableToLoadGame) {
            loadBtn?.removeAttribute('disabled');
        }
        else {
            loadBtn?.setAttribute('disabled', 'true');
        }
    }

    clearAfterLoad(): void {
        sessionStorage.clear();
        this.refreshField();
        this.checkSessionButtonsState();
    }

    stringifyCells(): string {
        const cellsInfo: StoredCell[] = [];
        this.cells.forEach(cell => {
            const cellInfo: StoredCell = { cellId: cell.cellId, cellValue: cell.cellValue }
            cellsInfo.push(cellInfo);
        });
        return JSON.stringify(cellsInfo);
    }

    parseCellValues(stringifiedCells: string): StoredCell[] {
        return <StoredCell[]>JSON.parse(stringifiedCells);
    }

    saveGame(): void {
        const cells: string = this.stringifyCells();
        localStorage.setItem('savedGameCells', cells);
        localStorage.setItem('currentMove', JSON.stringify(this.currentSymbol));
    }

    loadGame(savedCells: string, savedMove: string): void {
        const parsedCells: StoredCell[] = this.parseCellValues(savedCells);
        const currentMove: number = <number>JSON.parse(savedMove);
        this.currentSymbol = currentMove;
        this.cells.forEach(cell => cell.cellValue = NaN);
        parsedCells.forEach(parsedCell => {
            const actualCellId = this.cells.findIndex(el => el.cellId === parsedCell.cellId)
            this.cells[actualCellId].cellId = parsedCell.cellId;
            if (parsedCell.cellValue) {
                this.cells[actualCellId].cellValue = parsedCell.cellValue;
            }
        });
    }

    getLastMoveFromSS(): void {
        const savedCells = sessionStorage.getItem('savedGameCells');
        const savedMove = sessionStorage.getItem('lastMove');
        if (typeof savedCells !== 'string' || typeof savedMove !== 'string')
            return;
        this.loadGame(savedCells, savedMove);
    }

    getGameFromLC(): void {
        const savedCells = localStorage.getItem('savedGameCells');
        const savedMove = localStorage.getItem('currentMove');
        if (typeof savedCells !== 'string' || typeof savedMove !== 'string')
            return;
        this.loadGame(savedCells, savedMove);
    }

    saveLastMove(): void {
        const cells: string = this.stringifyCells();
        sessionStorage.setItem('savedGameCells', cells);
        sessionStorage.setItem('lastMove', JSON.stringify(this.currentSymbol));
    }
    refreshField(): void {
        this.setHeaderValue(this.currentSymbol);
        this.cells.forEach(cell => {
            cell.refreshCellValue(cell.cellValue)
        });
    }
    
}
