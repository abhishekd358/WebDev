let x = 10;

function test(a = x, x) { //a=x :because default parameter scope creates TDZ for later parameters.
   console.log(a, x);
}

test(); 
// OUTPUT: ReferenceError: Cannot access 'x' before initialization



// ----------------------------------------2nd
let x = 10;

function test(a=x, m) {
  console.log(a, m);
}

test(); 

// OUTPU: 10 undefined 


// ---------------------------------------------3
let a = 10;

{
  console.log(a);  // TDZ for inner 'a'
  let a = 20;
}

// OUTPUT: ReferenceError: Cannot access 'a' before initialization