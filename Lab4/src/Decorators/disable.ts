export function disable(disableFunction:Function){
    disableFunction.prototype.available=false;
}