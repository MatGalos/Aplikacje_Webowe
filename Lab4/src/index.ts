import { Games } from "./gamesEnum";
import { Game } from "./gameModel";
import { TicTacToe } from "./tictactoe/tictactoe";
import './styles/styles.scss';
import Switcher from './switcher';
import Back from './back';
class App {

    constructor() {
        this.init();
    }
    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        const menuHeader = <HTMLDivElement>(document.createElement('div'));
        const list = document.createElement('ul');

        menuContainer.setAttribute('id','menu');
        gameContainer.className = 'gameSpot';
        gameContainer.setAttribute('id', 'gameContainer');

        for (const gameType of Object.keys(Games)) {
            if (isNaN(Number(gameType)))
                continue;
            const game = gameSwitch.getGame(Number(gameType));
            const item = document.createElement('li');
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener("click", () => {
                const back = document.getElementById('back');
                back?.classList.remove('backHidden')
                menuContainer.setAttribute('hidden','true');
                gameContainer.innerHTML = "";
                gameContainer.appendChild(game.getGameElement());
            })
            list.appendChild(item);
        }
        const menuHeaderP = <HTMLElement>document.createElement('p');
        menuHeaderP.innerHTML = 'Avalible Games';
        menuHeader.appendChild(menuHeaderP);
        menuContainer.appendChild(menuHeader);
        menuContainer.appendChild(list);

        const main = <HTMLElement>document.createElement('main');
        main.className = 'mainContainer';
        main.appendChild(menuContainer);
        main.appendChild(gameContainer);
        document.body.appendChild(main);
        new Switcher();
        new Back();
    }
}
class GameFactory {
    getGame(game: Games): Game {
        switch (game) {
            case Games.TicTacToe:
                return new TicTacToe;
            default:
                throw new Error('This game does not exist');
        }
    }
}
let gameSwitch = new GameFactory();
new App();