const http = require('http')

const generateId = () => Date.now() * Math.random();


class User {
    id: number;
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }

}

class SaveToDB {
    send(user: User) {
        //save user in DB
    }
}
    
class Log{
    user: User;
    constructor(user:any) {
        this.user = user; 

    }
    log(user: User){
        console.log(user);
        return user;
        }
    }
class UserController{
    send(user: User){
        return http.send()
        }
}
    
const user = new User('alah', 'agaaga')
const log = new Log(user);
console.log(log.log(user));


class HttpClient{
    get(url: string){}
    post(){}
    put(){}
    delete(){}
}

class UserService{
    client: HttpClient;
    constructor(client:any) {
        this.client = client;
    }
    getOneUser(id: number){}
    getAllUsers(){}
}

class RequisitesService{
    createRequisites() { }
    getRequisites() { }
    UpdateRequisites() { }
    
}
class DataFetcher{
    client: HttpClient;
    constructor(client:any) {
        this.client = client;
    }

    getUser(id: number) {
        this.client.get('http://localhost:5000' + id);
    }

    getRequisite(id: number) {
        this.client.get('http://localhost:5000/requisite' + id);
    }

    getClients() {
        this.client.get('http://localhost:5000/clients');
    }
    
}

    
