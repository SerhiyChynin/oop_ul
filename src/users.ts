// Инкапсуляция и сокрытие 


function generateRandomId(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
    
class User {
    private _username;       //Если свойства приватные нужны гетеры и сетеры чтобы управлять свойствами из вне
    private _password;
    private _id;
    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }
 
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get id() {
        return this._id;
    }
}

const user = new User('Serhhi', 'Chy');
// user.id = 'oleg'
user.username = 'Kitty';
console.log(user);


class DataBase {
    private _url;
    private _port;
    private _username;
    private _password;
    private _table:any;

    constructor(url:any, port:number, username:string, password:any) {
        this._url = url; 
        this._port = port; 
        this._username = username; 
        this._password = password; 
        this._table = [];
    }
    public createNewTable(table:any) {
        this._table.push(table)
    }
    public clearTable(table: any) {
        this._table = [];
    }
    get url() {
        return this._url;
    }
    get port() {
        return this._port;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    get table() {
        return this._table;
    }
    
}

const db = new DataBase('1', 2, 'Serhi', 'asd3')
// db.table = []; - нет доступа на прямую
db.createNewTable({name: 'roles'}) // через метод есть доступ к изменениям
db.createNewTable({ name: 'cliff' }) 
db.clearTable({}) // внутри класса создали метод  для удаления таблиц
console.log(db);

//можно изменять только внутри класса, нет доступа из вне на прямую. В этом суть инкапсуляции

