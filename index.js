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

// ******************************************************
// Getters and setters as property wrappers
// ******************************************************

const car = {
  //add properties, prefixed with '_'
  _make: 'BMW',
  _model: 'i8',
  _year: '2021',

  //create getter method for '_make'
  get getMake() {
    return this._make;
  },

  //create setter method for '_make'
  set setMake(carMake) {
    if (typeof carMake === 'string' && carMake.length > 0) {
      this._make = carMake;
    }
  },

  //getter method for '_model'
  get getModel() {
    return this._model;
  },

  //setter method for '_model'
  set setModel(carModel) {
    if (typeof carModel === 'string' && carModel.length > 0) {
      this._model = carModel;
    }
  },

  //getter method for '_year'
  get getYear() {
    return this._year;
  },

  //setter method for '_year'
  set setYear(carYear) {
    if (typeof carYear === 'string' && carYear.length > 0) {
      this._year = carYear;
    }
  },
};

//Getting existing car properties
//execute getter methods
console.log(car.getMake); //BMW
console.log(car.getModel); //i8
console.log(car.getYear); //2021

//Change some properties
//Execute setter methods
car.setMake = 'Tesla';
car.setModel = 'Suv';

//Getting new properties of car object
console.log(car.getMake); //Tesla
console.log(car.getModel); //Suv

//Try to change without setter method
car.make = 'Nissan'; //it is creating new property of car, but not changing '_make' property
console.log(car.getMake); //Tesla  -->not Nissan??
console.log(car);
/*
{ 
  make: "Nissan", 
  _make: "Tesla", 
  _model: "Suv",
  _year: "2021" 
}
*/

// ***************************************************** */
// Creating getters and setters on the go
// ***************************************************** */

//create an object
const book = {
  _title: 'Six of Crows',
  _author: 'Leigh Bardugo',
  _pubDate: 'February 6, 2018',
};

//Add getter and setter for title
//Parameter 1: object to update
//Parameter 2: property to add/update
//Parameter 3: object containing getter and setter
Object.defineProperty(book, 'title', {
  get() {
    return this._title;
  },
  set(newTitle) {
    if (typeof newTitle === 'string' && newTitle.length > 0) {
      this._title = newTitle;
    }
  },
});

//Add getter and setter for author
//Parameter 1: object to update
//Parameter 2: property to add/update
//Parameter 3: object containing getter and setter
Object.defineProperty(book, 'author', {
  get() {
    return this._author;
  },
  set(newAuthor) {
    if (typeof newAuthor === 'string' && newAuthor.length > 0) {
      this._author = newAuthor;
    }
  },
});

//Add getter and setter for pubDate
//Parameter 1: object to update
//Parameter 2: property to add/update
//parameter 3: object containing getter and setter
Object.defineProperty(book, 'pubDate', {
  get() {
    return this._pubDate;
  },
  set(newPubDate) {
    if (typeof newPubDate === 'string' && newPubDate.length > 0) {
      this._pubDate = newPubDate;
    }
  },
});

// ***************** Get Current Book Data *********************

// get current book title: this executes the getter method for 'title'
console.log(book.title); //Six of Crows

//Get current book author
//This executes the getter method for 'author'
console.log(book.author); //Leigh Bardugo

//Get current book publication date
//This executes the getter method for 'pubDate'
console.log(book.pubDate); //February 6, 2018

//*************** Change Book Data *************** */

//This executes the setter method for 'title'
book.title = 'Red Rising';

//This executes the setter method for 'author'
book.author = 'Pierce Brown';

//This executes the setter method for 'pubDate'
book.pubDate = 'January 28, 2014';

//Get new update book data

console.log(book.title); //Red Rising
console.log(book.author); //Pierce Brown
console.log(book.pubDate); //January 28, 2014
