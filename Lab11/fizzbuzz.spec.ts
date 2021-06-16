import {FizzBuzz} from "./fizzbuzz"

describe('FiBu', () => {
    let fibu :FizzBuzz;

    beforeEach(()=>{
        fibu=new FizzBuzz()
    });

    it('should return Fizz at third position,Buzz at 5th and FizzBuzz at 15th', () => {
        expect(fibu).toBeInstanceOf(FizzBuzz);
        const s=fibu.generate(16);
        expect(s.join(" ")).toContain("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
    });
})
