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

// SETTER method
// ******************************************

//create an object
const user = {
  name: 'Zajmin',
  isAdmin: false,

  //create setter method
  set setName(newName) {
    //Conditional to allow only string with more than 0 charaters.
    if (typeof newName === 'string' && newName.length > 0) {
      this.name = newName;
    } else {
      if (typeof newName !== 'string') {
        console.log('Please use only string.');
      } else if (newName.length === 0) {
        console.log('Please use name with more than 0 characters.');
      }
    }
  },
};

//Try to change the value of 'name' to an empty string
//This executes the setter method for 'name'
user.setName = ''; //Please use name with more than 0 characters.

//Try to change the value of 'name to a number
//This executes the setter method for 'name'
user.setName = 55; //Please use only string.

//Check the value of 'name' property
console.log(user.name); //Zajmin

//Try to change value of 'name' to a string
//This executes the setter method for 'name'
user.name = 'Emily';

//Again check the value of 'name' property
console.log(user.name); //Emily
