const n= 4
for (let i=1; i<=n; i++){
    let line = ''
    for (let j=4; j>i; j--){
        line+= j +' '
    }
    line+= `${i+1} `.repeat(1)
    console.log(line);    
}

console.log('=======');


for (let i=1; i<=n; i++){
    let line = ''
    for (let j=n; j>n-i+1; j--){
        line+= j +' '
    }
    console.log(line);    
}

console.log('=======');

for (let i=n; i>=1; i--){
    let line = ''
    for (let j=n-i+2; j<=n; j++){
        line+= j +' '
    }
    console.log(line);    
}
console.log('=======');

for (let i=1; i<=n; i++){
    let line = ''
    for (let j=n-i+2; j<=n; j++){
        line+= j +' '
    }
    console.log(line);    
}



