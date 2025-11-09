const charCode = 65
const n = 5
for (let i=1; i<=n; i++){
    let line= ''
    
    for(let j=i; j>=1; j--){
        line += String.fromCharCode(charCode + n-j )+' '
        
        
    }

    console.log(line);
}


// E 
// D E 
// C D E
// B C D E
// A B C D E