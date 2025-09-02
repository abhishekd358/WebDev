const str = "hello bro"

console.log(str.split('').reverse().join(''))



// method 2

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
