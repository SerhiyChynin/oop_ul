//разделение интерфейсов. Не делать антипатерн интерфейсов, если класс не будет использовать метод с интерфейса, лучше разделить на 2 интерфейса

enum Route {
    ABOUT = 'about_page',
    HOME = 'about_home',
}

interface Router{
    parseUrl: (url:any) => void;
    addQueryParams: (params: Record<string, string>) => void;

}
interface IClientRouter{
    navigate: (route: Route) => void;
    attachEventListener: () => void;
}


interface IServerRouter extends Router{
    prepareUrlForClient: (url: string) => void;  
} 

class ServerRouter implements IServerRouter{
    parseUrl(url:any): void{};
    addQueryParams(params: Record<string, string>): void{};
    prepareUrlForClient(url: string): void{};  
}

class ClientRouter implements IClientRouter{
    parseUrl(url:any): void{};
    addQueryParams(params: Record<string, string>): void{};
    prepareUrlForClient(url: string): void{};  
    navigate(route: Route):  void{};
    attachEventListener(): void{};

}

const renderHtmlPage = (store: any, url: any){
    const router = new ServerRouter();

}

const client = () => {
    const store = createStore(initialData);
    const router = new ClientRouter();
    const di = createDependencyContainer(router, store)

}
const server = (req:any, res:any) => {
    const store = createStore(initialData);
    const router = new ServerRouter();
    const di = createDependencyContainer(router, store)
    const htmlPage = renderHtmlPage(store, req.url);
}

const createDependencyContainer = (router: Router, store:any, httpRequest: HttpRequest) => {
    return {
        getRouter: () => router,
        getStore: () => store,
        getRequest: () => httpRequest,
        
    }
}


interface HttpRequest{
    get: () => void;
    post: () => void;
    put: () => void;
    delete: () => void;
}

//Axios || http module
class ServerHttp implements HttpRequest{
    get: () => void;
    post: () => void;
    put: () => void;
    delete: () => void;
    // addToken(): void{
    // throw new Error('not implement');
    // }   
    
}

//Fetch
class ClientHttp implements HttpRequest, TokenStorage{
    get(): void{};
    post(): void{};
    put(): void{};
    delete():  void{};
    addToken(): void {
        return localStorage.get('token');
    }
    getToken: () => void;
}

interface TokenStorage{
    addToken: () => void;
    getToken: () => void;
}

//Избавляем сущности от методов которые они не используют, более предсказуемая работа, код менее связный