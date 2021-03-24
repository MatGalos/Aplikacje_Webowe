var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    var name = person.name, surname = person.surname, age = person.age, role = person.role;
    console.log(name + "," + surname + "," + age + "," + role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predate criteria
    return persons.filter(criteria);
}
function namedAdam(param) {
    return param.name === 'Adam';
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
//1
console.log('Zadanie 1');
users.forEach(function (element) {
    logPerson(element);
});
admins.forEach(function (element) {
    logPerson(element);
});
//2
console.log('Zadanie 2');
var all = __spreadArray(__spreadArray([], users), admins);
all.forEach(function (element) {
    logPerson(element);
});
//3
console.log('Zadanie 3');
function isOver25(person) {
    var age = person.age;
    if (age > 25) {
        return logPerson(person);
    }
}
var passed = all.filter(isOver25);
passed.forEach(function (x) {
    logPerson(x);
});
//4
console.log('Zadanie 4');
var filter = filterPersons(all, namedAdam);
filter.forEach(function (x) {
    logPerson(x);
});
