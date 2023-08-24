

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