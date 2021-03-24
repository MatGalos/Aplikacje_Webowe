interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name:string;
    surname:string;
    age:number;
    role:string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    const{name,surname,age,role}=person;
    console.log(`${name},${surname},${age},${role}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predate criteria
    return persons.filter(criteria);
    }
    
    function namedAdam(param:any):boolean{
        return param.name==='Adam';
        }
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });


    //1
        console.log('Zadanie 1');
    users.forEach(element => {
        logPerson(element);
    });

    admins.forEach(element=>{
        logPerson(element);
    })


    //2
    console.log('Zadanie 2');
    const all=[...users,...admins];
    all.forEach(element=>{
        logPerson(element);
    })

    //3
    console.log('Zadanie 3');
    function isOver25(person:Person){
        const age=person.age;
        if(age>25){
            return logPerson(person);
        }
    }

    const passed=all.filter(isOver25);
    passed.forEach(x=>{
        logPerson(x);
    })

    //4
    console.log('Zadanie 4');
    const filter=filterPersons(all,namedAdam);
    filter.forEach(x=>{
        logPerson(x);
    })