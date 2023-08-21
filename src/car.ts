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

class Car{
    engine: Engine;
    wheels: Wheel[] = [];
    constructor() {
        // this.wheels = [];
        //композиция
        this.engine = new Engine();
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

const bmw = new Car();
bmw.drive();



