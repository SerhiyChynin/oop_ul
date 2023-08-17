class Person{
    private _firstName
    private _lastName
    private _age
    constructor(firstname:string, lastname:string, age:number) {
        this._firstName = firstname;
        this._lastName = lastname;
        this._age = age;
    }

// ************** Полиморфизм *****************
    
    public greeting() {
        console.log(`Hello i'm a person my name is ${this._firstName} ${this._lastName}`);
    }


    public get fullName() {
        return `firstname: ${this._firstName} lastname: ${this._lastName}`
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value:string) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value:string) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value:number) {
        if (value < 0) {
            this._age = 0
        } else{
        this._age = value;
        }
    }

}

class Employee extends Person {
    private _inn;
    private _number;
    private _snils;
    constructor(firstName:string, lastName: string, age: number, inn: number, number: number, snils: any) {
        super(firstName, lastName, age); //в первую очередь будет вызван родительский конструктор, потом пойдут действия с этого класса
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }
    greeting() {
        console.log(`Hello i'm a employee my name is ${this.firstName} ${this.lastName}`);
    }
}


class Developer extends Employee{
    private _level;
    private _languege;

    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: any, level: string, languege: string) {
        super(firstName, lastName, age, inn, number, snils)
        this._level = level;
        this._languege = languege;
    }
    set level(value: string) {
        this._level = value;
    }
     greeting() {
        console.log(`Hello i'm a developer my name is ${this.firstName} ${this.lastName}`);
    }
}

const developer1 = new Developer('Alex', 'Bowski', 22, 2223344, 100, 'kjhl12', 'junior', 'js')
developer1.age = 35
developer1.level = 'middle';
console.log(developer1.fullName);
console.log('=======================================');

const employee1 = new Employee('Employee', 'Roksy', 22, 2223344, 100, 'kjhl12');
const person = new Person('Person', 'Track', 22)

//Полиморфизм - так как через наследование доступны методы родителя у каждого обьекта будет доступен метод приветствия

// developer1.greeting();
// employee1.greeting();
// person.greeting();

const personList: Person[] = [person, employee1, developer1];

function massGreeting(persons: Person[]) {
    for (let i = 0; i < persons.length; i++){
        const person = persons[i];
        person.greeting()
    }
}
massGreeting(personList);


