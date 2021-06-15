import { Game } from "../gameModel";
import Board from "./Board";
import{logGameRun} from "../Decorators/log"
import { enable } from "../Decorators/disable";
import {count} from '../Decorators/count'

@enable
export class TicTacToe implements Game {
    name: string;
    avalible:boolean;
    constructor() {
        this.name = "Tic Tac toe";
    }
    @logGameRun  
    getGameElement(): HTMLElement {
        const container = document.createElement('div');

        const header = document.createElement('div');
        header.className = 'gameHeader';
        const headerValue = document.createElement('p');
        headerValue.innerHTML = 'Tic Tac toe';

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