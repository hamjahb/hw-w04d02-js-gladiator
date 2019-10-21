'use strict';

import Arena from './arena.js';
import Gladiator  from './gladiator.js'


const max = new Gladiator("Maximus","Trident");

const colosseum = new Arena("Colosseum");
// const colosseum = new Arena("megalopolis");


console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
console.log(colosseum.name); // => Megalopolis
console.log(colosseum.gladiators); // => []



colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]

const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");



colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); // => 2


colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators[0].name); // => [max]