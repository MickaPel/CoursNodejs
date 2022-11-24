require('colors');

//import common js
const hello = require('./extensions/usefull')
// const customMath = require('./extensions/customMath.js')
const { addition } = require('./extensions/customMath');

//import ESM
import Voiture from './extensions/Voiture'
import path from 'path'

// console.log(hello('james').green, hello().blue);

// console.log(customMath.addition(1, 2, customMath.PI, 4))
// console.log(customMath.soustraction(10, 5))

console.log(addition(1, 2, 3, 4, 5))

const v = new Voiture('citroen', 'ds3')
console.log(v.detail())

console.log(path.basename(__filename).green);