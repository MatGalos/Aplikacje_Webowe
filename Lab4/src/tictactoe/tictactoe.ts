import { Game } from "../gameModel";
import Board from './Board';


export class TicTacToe implements Game {
    name: string;
    constructor() {
        this.name = "Tic Tac Toe";
    }
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        const header = document.createElement('div');
        header.setAttribute('id','tttHeader');
        const table = document.createElement('table');
        table.setAttribute('id','tictactoe');
        div.appendChild(header);
        div.appendChild(table);
        let tableSize: number = 3;
        setTimeout(() => new Board(tableSize), 1);
        return div;
    }
}