const n= 6
for (let i=1; i<n; i++){
    let line=''
    // console.log(`looping no ${i}`,line);
    
    for (let j=i; j>=1; j--){
        // console.log('current j value',j);
        if(j%2==1){
            // if j mera odd hai to 1
            line += 1 + ' '  
        }else{
            // if j mera even hai to 0
            line += 0 + ' '
        }

    }
    console.log(line)
}


// 1 
// 0 1 
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

