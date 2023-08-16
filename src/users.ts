class User {
    private _username;       //Если свойства приватные нужны гетеры и сетеры чтобы управлять свойствами из вне
    private _password;
    private _id;
    constructor(username, password) {
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


