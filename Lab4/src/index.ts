import { Games } from "./gamesEnum";
import { Game } from "./gameModel";
import {TicTacToe} from './tictactoe/tictactoe'

class App {

    constructor() {
        this.initMenu();        
    }

    

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        menuContainer.setAttribute('id','menu');
        gameContainer.setAttribute('id', 'gameContainer');

        for (const typeOfGame of Object.keys(Games)){
            if(isNaN(Number(typeOfGame))) continue;
            const game=gameSelection.getGame(Number(typeOfGame));
            const display=document.createElement('li');
            display.appendChild(document.createTextNode(game.name));
            display.addEventListener('click',()=>{
                gameContainer.innerHTML="";
                gameContainer.appendChild(game.getGameElement());
            })
            list.appendChild(display);
        }
        menuContainer.appendChild(list);
        const main = <HTMLElement>document.createElement('main');
        main.className = 'mainContainer';
        main.appendChild(menuContainer);
        main.appendChild(gameContainer);
        document.body.appendChild(main);
    }
}

class avalibleGames{
    getGame(game:Games):Game{
        switch(game){
            case Games.TicTacToe:
                return new TicTacToe;
            default:
                return new TicTacToe;
        }
    }
}

let gameSelection=new avalibleGames();
new App();