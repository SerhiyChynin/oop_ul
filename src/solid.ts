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
        //save user in DB
}
    
class Log {
    log(user: User){
        console.log(this);
        }
    }
class Send{
    send(user: User){
        return http.send()
        }
    }