export class FizzBuzz{

    generate(number:number){
        let output:string[]=[];
        for(let i=1;i<=number;i++){
            output.push(this.isDividable(i));
        }
        return output;
    }

    isDividable(number:number):string{
        if (number%3===0 && number%5===0) return "FizzBuzz";
        else if(number%3===0) return"Fizz";
        else if(number%5===0) return "Buzz";
        else return String(number);}
}
