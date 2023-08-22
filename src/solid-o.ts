import { log } from "console";

class Weapon{
    type: string;
    damage: number; // 0 - 100
    range: number; // 0 - 100
    constructor(type: string, damage: number, range: number) {
        this.type = type;
        this.damage = damage;
        this.range = range;
    }
    attack() {
        if(this.type == 'sword'){
        console.log('sword attack damage - ' + this.damage);
        }
        if(this.type == 'arch'){
        console.log('arch shot damage - ' + this.damage);
        }
        
    }
}

class Character{
    name: string;
    weapon: Weapon;
    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }
    attack() {
        this.weapon.attack()
    }
}

const sword = new Weapon('sword', 80, 10);
const char = new Character('Ahiles', sword);
console.log(char.attack());

const arch = new Weapon('arch', 50, 100);
char.changeWeapon(arch);
console.log(char.attack());
