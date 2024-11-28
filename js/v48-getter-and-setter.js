/*  get() and set() method usablitiy in the classes
this above methods are use to access the class Variables or private class variable
(nothing is private) for that case the get() and set() is used
*/ 

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //  get :  used to return the value
    get password(){ // name of method same as the class Variables
        return this._password.toUpperCase()
    }

    // set : used to set the value for the variable
    set password(value){
        this._password = value.toUpperCase()
    }

}

const instance1 = new User("example@email.com", "abcde007")
console.log(instance1.password);
console.log(instance1.email)


