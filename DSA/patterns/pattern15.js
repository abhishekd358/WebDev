let charCode = 65
const n = 5
for (let i=n; i>0; i--){
    let line= ''
    for(let j=0; j<i; j++){
        line += String.fromCharCode(j + charCode)+ ' '
    }
    console.log(line);
}


// A B C D E 
// A B C D 
// A B C
// A B
// A