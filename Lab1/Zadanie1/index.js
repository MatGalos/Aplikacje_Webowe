//pierwsza część zadania 1
/*const imie = 'John';
document.body.innerHTML = `<h1>Hello ${imie}</h1>`*/
//druga część zadania 1
var Person = /** @class */ (function () {
    function Person(i, n, w) {
        this.imie = i;
        this.nazwisko = n;
        this.wiek = w;
    }
    Person.prototype.Show = function () {
        return "<h1>Witaj " + this.imie + " i " + this.nazwisko + " mam " + this.wiek + " lat</h1>";
    };
    return Person;
}());
var J = new Person("John", "Blake", 11);
document.body.innerHTML = J.Show();
