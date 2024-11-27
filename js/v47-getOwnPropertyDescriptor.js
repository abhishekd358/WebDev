//  in js the Object has the property called getOwnPropertyDescriptor():
//  which has certain property in it that defines the basic behavior of object such as : 
//            Over-writable or not  i.e writable, enumerable, or configurable.

// we can control the property of user define object only , can we control the property of the built in Value such Math.PI




// built-in objects are read-only, meaning they cannot be changed.



//  basically the below code print the built in non changable property of the PI value
console.log(Object.getOwnPropertyDescriptor(Math, "PI")) 





// built-in objects are read-only, meaning they cannot be changed. 
//  but we can change the property of the userdefined Object properties by following way. In below code PI is user-defined not built-in 
const customMath = {};
Object.defineProperty(customMath, 'PI', {
  value: 9,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(customMath.PI); // 3.14

customMath.PI = 20000; // Now you can change it
console.log(customMath.PI); // 3.1415
