// @ts-check
const {calculateAnimal} = require('./animalCount');

/**
 * @file index.js is the root file for this application
 * @author Md Muaz Ahmed
 * @see <a href="https://github.com/mdsharef"> github account </a> | <a href="https://facebook.com/mdmuaz45"> facebook account </a>
 */

/**
 * Pet animal name
 * @type {string}
 */
const petName = "Python";

/**
 * take a number
 * @type {number}
 */
const number = 100;

/**
 * This an arr of number, boolean and string 
 * @type {Array<number|boolean|string>}
 * 
 */
const myArr = [10, 12, 34, true, 'Muaz']

/**
 * This is an arr of only number
 * @type {Array<number>}
 */
const myArr2 = [10, 12, 45]

/**
 * This is an arr of all data type
 * @type {Array}
 */
const myArr3 = [10, 'Muaz', true, null, {id: '12', name: 'Muaz'}]

/**
 * An object of pet animal
 * @type {{id: string, name: string, age: number|string, gender: string}}
 */
const myPet = {
    id: '12',
    name: 'Python',
    age: '12',
    gender: 'Male'
}

/**
 * Calculate the age of pet
 * @param {number} current the year from which the age will be counted {current year}
 * @param {number} yearOfBirth the year of birth of the pet {birth year}
 * @returns {string} age of the pet.
 */
const calculatePetAge = (current, yearOfBirth) => {
    return `Your pet is ${current - yearOfBirth} years old`
}

/**
 * Defination for a Cat object
 * @typedef {Object} Cat
 * @property {number} id - Id for the object
 * @property {string} name - Name of the cat
 * @property {number|string} age - Age of the cat
 * @property {boolean} [isMale] - Whether the cat is male or female {optional}
 */

/**
 * @type {Cat}
 */
const myCat = {
    id: 121,
    name: 'Rust',
    age: 5,
    isMale: false,
}

/**
 * A class to create animal object
 */
class Animal {
    /**
     * Details of the animal to be created
     * @param {object} animalDetails - the details of the animal
     */
    constructor(animalDetails) {
        /**
         * @property {string} name - the name of the animal
         */
        this.name = animalDetails.name;
        /**
         * @property {string|number} age - the age of the animal
         */
        this.age = animalDetails.age;
        /**
         * @property {string} type - the type of the animal
         */
        this.type = animalDetails.type;
    }

    /**
     * @property {Function} printAnimalDetails - print the details of the animal
     * @returns {void}
     */
    printAnimalDetails() {
        console.log(`Animal name is ${this.name} and its age is ${this.age}. It is ${this.type} animal.`);
    }
}

/**
 * linked to Animal class.
 * see {@link Animal}
 */
const cow = new Animal({name: 'Cow', age: 6, type: 'Mummul'});

// cow.printAnimalDetails();

console.log(calculateAnimal(20, 5));