export class GuaiWu {
    #hello() {
        console.log('hello');
    }

    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    tellMeAboutYourself() {
        this.#hello();
        return `I am ${this.name} and I have ${this.health} health and ${this.strength} strength.`;

    }
}
