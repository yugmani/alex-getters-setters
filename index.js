// Import stylesheets
import './style.css';

//Getter method
// *************************************

//Create an object
const dog = {
  name: 'Jack',

  // Create getter method
  get getName() {
    // returning dog's name
    return `My dog's name is ${this.name}.`;
  },
};

//Execute the getter method
// Note: don't use parentheses to call getter method
// console.log(dog.getName());  //Error: dog.getName is not a function

console.log(dog.getName);
//My dog's name is Jack.
