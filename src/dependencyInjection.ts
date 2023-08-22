import { User } from "./interface";

interface UserRep{
    getUser: () => User[];
    //delete, create...

}

class UserMongoDBRep implements UserRep{
    getUser(): User[]{
        console.log('use mongo and get users');
        return [{age: 15, username: 'user from Mongo BD'}];
    };
}

class UserPostgresDBRep implements UserRep{
    getUser(): User[]{
        console.log('use Postgres and get users');
        return [{age: 15, username: 'user from Postgres BD'}];
    };
}

const user1 = new UserMongoDBRep();
// console.log(user1.getUser());

class UserService{
    userRep: UserRep;
    constructor(userRep: UserRep) {
        this.userRep = userRep;
    }
    filterUserByAge(age: number) {
        const users = this.userRep.getUser();
        //логика по фильтпации...
        console.log(users);
    }
}

const userService = new UserService(new UserPostgresDBRep())
userService.filterUserByAge(1)