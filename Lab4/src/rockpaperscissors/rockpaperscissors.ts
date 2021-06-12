import { Game } from "../gameModel";
import{logGameRun} from "../Decorators/log"
import {disable} from "../Decorators/disable"

@disable
export class RockPaperScissors implements Game{
    name: string;
    avalible: boolean;
    constructor() {
        this.name = "Rock Paper Scissors";
    }
    @logGameRun
    getGameElement():HTMLElement{
        const container=document.createElement('div');
        container.setAttribute('id','RockPaperScissors');
        container.innerHTML='Rock Paper Scissors';
        return container;
    }
}