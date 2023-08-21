// Композиция и агрегация

class Engine{
    drive(){
    console.log('Engine is work');
    }
    
}

class Wheel{
    drive(){
    console.log('Wheels are going');
    }
}

class Freshener{
    drive() {
        console.log('Fresh');
        
    }
}

class Flat{
    freshener: Freshener;
    constructor(freshener:any) {
        this.freshener = freshener;
    }
}

class Car{
    engine: Engine;
    wheels: Wheel[];
    freshener: Freshener;

    constructor(freshener:any) {
        //агрегация
        this.freshener = freshener;
        //композиция
        this.engine = new Engine();
        this.wheels = [];
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());

    }
    //делегирование
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++){
            this.wheels[i].drive();
        }
    }
}

const bmw = new Car('fresh');
bmw.drive();



