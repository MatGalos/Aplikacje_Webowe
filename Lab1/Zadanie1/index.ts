//pierwsza część zadania 1

/*const imie = 'John';
document.body.innerHTML = `<h1>Hello ${imie}</h1>`*/

//druga część zadania 1

class Osoba{
    imie:string;
    nazwisko:string;
    wiek:number;

    constructor(i:string,n:string,w:number){
        this.imie=i;
        this.nazwisko=n;
        this.wiek=w;
    }

    Show(){
        return `<h1>Witaj ${this.imie} i ${this.nazwisko} mam ${this.wiek} lat</h1>`
    }
}

let J=new Osoba("John", "Blake", 11);
document.body.innerHTML=J.Show();