import { Game } from "../gameModel";
import Board from './Board';


export class TicTacToe implements Game {
    name: string;
    constructor() {
        this.name = "Tic Tac Toe";
    }
    getGameElement(): HTMLElement {
        const container = document.createElement('div');

        const header = document.createElement('div');
        header.className = 'gameHeader';
        const headerValue = document.createElement('p');
        headerValue.innerHTML = 'Kółko i krzyżyk';

        const gameResponse = document.createElement('div');
        gameResponse.setAttribute('id','tttHeader');
        gameResponse.className = 'gameResponse';

        const table = document.createElement('table');
        table.setAttribute('id','tictactoe');

        header.appendChild(headerValue);
        container.appendChild(header);
        container.appendChild(gameResponse);
        container.appendChild(table);
        let tableSize: number = 3;
        setTimeout(() => new Board(tableSize), 1);
        return container;
    }
}