// class : is a senthetic sugar in js so it easy for coders.

class GiveClassName{
    constructor(var1 , var2, var3){// parameter declaration
            // below are the instance varible
            this.var1 = var1
            this.var2 = var2
            this.var3 = var3
    } 

    method1(){
        console.log(`var1 is accessed : ${this.var1}`)
    }

    method2(){
        console.log(`var2 is accessed : ${this.var2}`)
    }

    static method3(){  // static methods are not accessible to every instance of the same class
        console.log(`var3 is static accessed : ${this.var3}`)
    }

}



const instance1 = new GiveClassName(12, "h2o", [12,14,"mew"]) // instance is created
instance1.method1() // accesing method1 of the class
//instance1.method3() // we can't able to access the method3 which is static method



// ======================= Inheritance ===========================
 


class Vehicle{
    constructor(wheels){// parameter declaration
            // below are the instance varible
            this.wheels = wheels
    }
    bike(){
        return this.wheels = 2
    }

    car(){
        return this.wheels = 4
    }
}



class Motorcycle extends Vehicle{
    constructor(brand, color, price, wheels){// we have to define the variable of class from which we inheriting the properties . in this case; wheels
        super(wheels)
        this.brand = brand
        this.color = color
        this.price = price
    }

    // this class also now able to access the methods of Vechicle class

    Details(){
        console.log(`Brand : ${this.brand}
                    color: ${this.color}
                    price: ${this.price}
                    wheels: ${this.bike()}`
        )
    }

}



const KawasakiH2r = new Motorcycle("Kawasaki Ninja H2", "Black", 3600000)
KawasakiH2r.Details() // Motorcycle accessing the Vechicle class Method called Bike() to access the wheels of it.