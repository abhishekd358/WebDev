/*
in js 
    .new = contructor function
    .this = is used to create the instance of the object
            also it respectively used within it scope
            to access the data.

    Constructor Function: When you use new myFunc(...), JavaScript knows to create a new object, set this to that object, and return it.
    Returning this: It’s not necessary to explicitly return this in a constructor function, as it’s implicitly returned when new is used.
            

    
*/


function myFunc(sentence, word, number){
    this.sentence = sentence; 
    this.word = word;
    this.number = number;

    // return this // it is by default implicitly passed, no compulsion to pass it
};


const obj1 = new myFunc('what you see is what u get', 'wysiwyg', 12);
console.log(obj1)

const obj2 = new myFunc('am i great?', 'aig', 358)
console.log(obj2)

