

class DataBase{
    connect() { };
    read() { };
    write() { };
    // joinTables() { }; // при проектировании здесь не уместен єтот метод так как при дочернем монго сламается логика. 
}

class SQLDB extends DataBase{
    connect() { };
    read() { };
    write() { };
    joinTables() { }; // уместнее добавить метод тут
}
class NoSQLDB extends DataBase{
    connect() { };
    read() { };
    write() { };
    createIndex() { };
}

class MySqlDB extends SQLDB{
    connect() { };
    read() { };
    write() { };
    joinTables() { }; // уместнее добавить метод тут

}

class MyMongoDB extends NoSQLDB{
    connect() { };
    read() { };
    write() { };
    createIndex() { };
    mergeDocument() { };
    // joinTables() {
    //     throw new Error('mongo DB no Tables');
    //  }; тут его быть не должно

}

//в базовом классе определенны операции доступные для всех БД, специфичные методы выносим в отдельные классы

function startApp(database: DataBase) {
    database.connect();
}

startApp(new MyMongoDB());
startApp(new MySqlDB());
//Барбара Лисков