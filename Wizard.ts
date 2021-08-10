interface Character {
    name: string;
    type: string;
}

class Player implements Character  {
    name: string;
    type: string;

    constructor(_name: string, _type: string){
        this.name = _name;
        this.type = _type;
    }
    introduction() {
        console.log(`Hi I am ${this.name}, I\'m a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`WEEEEEE I\'m a ${this.type}`)
    }
}
const wizard1 = new Wizard("Melissa", "Angel");
const wizard2 = new Wizard("Clyde", "Sorcerer");
wizard1.introduction();
wizard2.introduction();
wizard1.play();
wizard2.play();

