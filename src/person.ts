class Person{
    private _firstName
    private _lastName
    private _age
    constructor(firstname:string, lastname:string, age:number) {
        this._firstName = firstname;
        this._lastName = lastname;
        this._age = age;
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
}

const employee1 = new Employee('Alex', 'Bowski', 22, 2223344, 100, 'kjhl12');
console.log(employee1);
