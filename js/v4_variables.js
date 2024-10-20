/* variable */
const accountId = 12345
let accountEmail = 'abhi@gmail.com' 
var accountFirst_Name = 'Abhinav' // Avoid this
accountLast_Name = 'Bindra' // Avoid this

// two ways to print
console.log(accountLast_Name);
console.table([accountId, accountEmail, accountFirst_Name, accountLast_Name]);





/* 

------------->>>>>>--------------------NOTES------------------->>>>>>>>---------


ctrl + / to comments
javascript has two things :
    constant = value not chaange
    variable = value change , mostly 'let' keyword use to declare.
               Avoid to use the 'var' Keyword beacuse it has problem with scope
               If empty varibale trated as 'undefined'


    *=------------===========CHAT GPT=================================*
    WHen to use the var and let

    1) Var : 
                function scope
                Hoisting: Variables declared with var are hoisted to the top of their scope, meaning you can 
                use them before they are declared, but their value will be undefined until the declaration is
                encountered.
                Global Context

                example :
                        function example() {
                        console.log(foo); // undefined due to hoisting
                        var foo = 10;
                        console.log(foo); // 10
                        }

                        example();
                    ]   console.log(foo); // ReferenceError: foo is not defined

    2) let :
                Block Scope
                No Hoisting 
                Avoiding Global Context

                example :
                        function example() {
                        // console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
                        let bar = 20;
                        console.log(bar); // 20
                        }

                        example();
                        // console.log(bar); // ReferenceError: bar is not defined






*/