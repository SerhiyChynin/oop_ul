//разделение интерфейсов. Не делать антипатерн интерфейсов, если класс не будет использовать метод с интерфейса, лучше разделить на 2 интерфейса

enum Route {
    ABOUT = 'about_page',
    HOME = 'about_home',
}
interface IRouter{
    parseUrl: (url:any) => void;
    navigate: (route: Route) => void;
    attachEventListener: () => void;
    addQueryParams: (params: Record<string, string>) => void;
}

class Router implements IRouter{
    parseUrl(url:any): void{};
    navigate(route: Route): void{};
    attachEventListener(): void{};   
    addQueryParams(params: Record<string, string>): void{};

} 

const renderHtmlPage = (store: any, url: any){
    const router = new Router();
}

const client = () => {
    const store = createStore(initialData);
    const router = new Router();

}
const server = (req:any, res:any) => {
    const store = createStore(initialData);
    const htmlPage = renderHtmlPage(store, req.url);
}