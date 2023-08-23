import { log } from "console";

interface Attacker{
    attack: () => void;
}

class Weapon implements Attacker{
    damage: number; // 0 - 100
    range: number; // 0 - 100
    constructor(damage: number, range: number) {
        this.damage = damage;
        this.range = range;
    }
    attack() {
        
    }
}
class Sword extends Weapon{
    attack(){
    console.log('sword hit damage - ' + this.damage);
    }
}
class Arch extends Weapon{
    attack(){
    console.log('arch shot damage - ' + this.damage);
    }
}

class Knife extends Weapon{
    attack() {
        console.log('knife backblow damage - ' + this.damage);
        
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

const sword = new Sword(80, 10);
const char = new Character('Ahiles', sword);
char.attack()

const arch = new Arch(50, 100);
char.changeWeapon(arch);
char.attack()
console.log(char);

const knife = new Knife(70, 1);
char.changeWeapon(knife);
char.attack();



//=========================================================================

class Person{
    fullName: string;
    constructor(fullName: string) {
        this.fullName = fullName;
    }
}


class PersonList{
    persons: Person[]
    constructor(persons: Person[]) {
        this.persons = persons;
    }
    sort() { 
        ClientSort.sort(this.persons);
    }
}

class Sort{
    public static sort(array: any[]): any[]{
        return [];
    }
}

class ClientSort extends Sort{
  public static sort(array: any[]): any[]{
    
        if (array.length < 10) {
            return BubbleSort.sort(array);
        } else if (array.length < 1000) {
            return MergeSort.sort(array);
        } else {
            return QuickSort.sort(array);
        }
    };
}

class BubbleSort extends Sort{
    public static sort(array: any[]): any[]{
        return array;
    };
}
class QuickSort extends Sort{
    public static sort(array: any[]): any[]{
        return array;
    };
}
class MergeSort extends Sort{
    public static sort(array: any[]): any[]{
        return array;
    };
}




class Music{

}
class MusicSort extends Sort{
  public static sort(array: any[]): any[]{
    
        if (array.length < 10) {
            return BubbleSort.sort(array);
        } else if (array.length < 1000) {
            return MergeSort.sort(array);
        } else {
            return QuickSort.sort(array);
        }
    };
}

class MusicList{
    musics: Music[];
    constructor(musics: Music[]) {
        this.musics = musics;
    }
    sort() {
        ClientSort.sort(this.musics)
    }
}
