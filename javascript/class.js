class Person {
    constructor(nameValue) {
        this._name = nameValue;
    }
    get name() {
        return this._name;
    }
    set name(name){
        this._name = name;
    }
}

let p = new Person('simo');

p._name = 'Pekka';
console.log(p.name);
p._age = 38;

console.log(JSON.stringify(p));

let pst = '{"_name":"Pekka","_age":38}';
const json = JSON.parse(pst, true);
console.log(json._age);