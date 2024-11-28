function User(email, password) {
    this._email = email;// variable private hai i.e '_email' or hamne non private variable ko access kiya i.e 'email'
    this._password = password;

    Object.defineProperty(this, 'email',{// email is passed here, name should be different.
        get: function(){
            return this._email.toUpperCase(); // hum private _email
        },
        set: function(value){
            this._email = value;
        }
    })

}


const var1 = new User("make@elite.com", 12234)
console.log(var1.email) // email is accessed here ,// or hum access unprivate ko kar rahe email