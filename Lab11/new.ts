enum plec{
    "Male",
    "Female"
}

class Osoba {
    imie:string;
    nazwisko:string;
    plec:plec;
    constructor(imieos:string,nazwiskoOs:string,plecos:plec){
        this.imie=imieos;
        this.nazwisko=nazwiskoOs
        this.plec=plecos
    }

    getFullName():string{
        return this.imie+" "+this.nazwisko; 
    }
}

const Jan=new Osoba("Jan","Kowalski",1)
const Ola= new Osoba("Ola", "Nowak", 2)
const array1={Jan,Ola}
const arrtostr=array1.toString();

localStorage.setItem('storage',arrtostr)