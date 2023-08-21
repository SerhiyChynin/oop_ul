
class User{
    username: string;
    age: number;
}

class Cars{
    model: string;
    year: number;
}
interface Repository<T> {
    create: (obj: T) => T;
    get: () => T;
    delete: (obj: T) => T;
    update: (obj: T) => T;
}

// const rep = new Repository();

class UserRepository implements Repository<User> {
    create(obj: User): User { 
        // return database.query(INSERT ...)
    }
    get(): User {
        return 'Serhii';
    }
    delete(obj: User): User{
        return undefined;

    }
    update(obj: User): User{
        return undefined;
    }
}

class CarRepository implements Repository<Cars> {
    create(obj: Cars): Cars { 
        // return database.query(INSERT ...)
    }
    get(): Cars {
        return 'Serhii';
    }
    delete(obj: Cars): Cars{
        return undefined;

    }
    update(obj: Cars): Cars{
        return undefined;
    }
}