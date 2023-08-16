class Rectangle {
    private _width; //нижнее подчеркивание указівает на то что свойство приватное. К нему нет доступа из внею Только внутри класа
    private _height;
    constructor(w: number, h: number) {
        this._width = w;
        this._height = h;
    }
    public get width() {
        return this._width;
    }
    public set height(value: number) {
        if (value <= 0) {
            this._height = 1;
        } else {
            
            this._height = value;
        }
    }
    calcArea() {
        return this._width * this._height;
    }
    calcPerimeter() {
        return (this._height + this._width) * 2;
    }
}
const rect = new Rectangle(5, 10)
// rect.width = -2;
console.log(rect.width);

