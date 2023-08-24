

interface MusicApi{
    getTracks: () => void;
}

class MusicClient implements MusicApi{
    client: MusicApi;
    constructor(client: MusicApi) {
        this.client = client;
    }
    getTracks(): void{
        this.client.getTracks(); 
    };

}

class Spotify implements MusicApi{
    get() { }
    getTracks(): void{};
}

class Youtube  implements MusicApi{
    findAll(){}
    getTracks(): void{};

}

const musicApp = () => {
    const API = new MusicClient(new Spotify());
    API.getTracks()
}


interface HttpClient{

}
class Axios implements HttpClient {
    request(){
    fetch
    XMLHttpRequest()
    node-fetch;
    node http module
    }
}

//S - single responsibility - каждый модуль одно единственное задание, значение, ответственность, ресурсы инкапсулированы в модуль
//O - open-closed - открыты для разширения и закрыты для для модефикаций(изменений того что уже есть)
//L - Liskov substitution - принцип подстановки - обьеткы должны быть заменяемыми на экземпляры дочерних классов, при этом логика не нарушаеться
//I - interface segregation - разделение интерфейсов - много разных интерфейсов для конкретного клиента лучше чем чем один универсальный. Класс не должен содержать методов который не использует
//D - dependency inversion - зависимость должна строиться на абстракциях, и нет зависимости на что-то конкретное. Модули высокого уровня не зависят от модуля низкого уровня, между ними абстракция(пульт управления)
