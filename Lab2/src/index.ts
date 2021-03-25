import{Snake} from './Snake';
import{Horse} from './Horse';
import {Animal} from './Animal';

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
  
sam.move();
tom.move(34);