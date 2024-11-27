
function SetUserName(username){
    this.username = username
    console.log("the SetUserName Function called")
}

function createUser(username, email, password){
    SetUserName.call(this, username) // calling the another function context 
    this.email = email
    this.password = password
}

const var1 = new createUser('lexus', 'lxus@gmail.com', 300)
console.log(var1) 