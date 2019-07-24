/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global, simple proccess
* 2. Implicit binding, can all with 
* 3. New binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/
// Principle 1

// code example for Window Binding
function sayMyName(myName) {
    console.log(this);
    return myName;
}
sayMyName("Big'Sal");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Wasuuh',
    sayHello: function(name) {
        console.log(`${this.salutation} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('BigSal');
// Principle 3

// code example for New Binding
function salsFriend(greeter) {
    this.greeting = 'Wassuh Pickle Rick';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const morty = new salsFriend('morty');
morty.speak();



// Principle 4

// code example for Explicit Binding
const jerry = new salsFriend('beth');
const beth = new salsFriend('jerry');

jerry.speak.call(beth)
beth.speak.call(jerry)
