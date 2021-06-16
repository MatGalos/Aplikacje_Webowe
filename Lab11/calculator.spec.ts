import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Add(2,2)).toEqual(4);
    });

    it('should return correct sub of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Substract(5,3)).toEqual(2);
    });

    it('should return correct multiply of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Multiply(3,3)).toEqual(9);
    });

    it('should return correct divide of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Divide(15,5)).toEqual(3);
    });

});