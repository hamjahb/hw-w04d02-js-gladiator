import Gladiators from './gladiator.js'

export default class Arena {
    constructor(name, gladiators = [],) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = gladiators;
    }
    addGladiator(name) {
        if (this.gladiators.length < 2){
            this.gladiators.push(name);
        } else {
        return `Too many Gladiators in the Arena!`
    }

    }

    fight() {
        
        if ((this.gladiators[0].weapon == "Trident" && 
        this.gladiators[1].weapon == "Spear") || (this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club") || (this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident"))
        {
            this.gladiators.pop();
            return this.gladiators[0].name;

        } else if ((this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear") || (this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club") || (this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident")) {

            this.gladiators.shift()
            // this.gladiators[0].name;
        }

        
    } 
}