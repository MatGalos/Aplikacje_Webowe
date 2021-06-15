export function disable(disableFunction:Function){
    disableFunction.prototype.available=false;
}

export function enable(disableFunction:Function){
    disableFunction.prototype.available=true;
}