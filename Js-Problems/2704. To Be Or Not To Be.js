
const expect = function(val) {

    function toBe(otherVal){
        if(Boolean(val === otherVal)){
            return {"value": true}
        }else{
            throw Error("Not Equal")
        }
    }
    
    function notToBe(otherVal){
        if(Boolean(val !== otherVal)){
            return {"value": true}
        }else{
            throw Error("Equal")
        }
    }
    
    return {
        toBe,
        notToBe
    }
    
};


expect(5).toBe(9); // true
// expect(5).notToBe(5); // throws "Equal"
