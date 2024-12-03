const BASEURL = "https://v6.exchangerate-api.com/v6/"
const apiKey = "aaa317e4448e5877e86d569a"
const dropdown = document.querySelectorAll(".dropdown select")
const flagFrom = document.querySelector(".from img"); 
const flagTo = document.querySelector(".to img")
// const options = document.querySelectorAll(".dropdown option")

// accessing the currency name from the from and to 
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
// msg bhi change kar na hai 
const msgbox = document.querySelector(".msg")

// button ko select karenge
const buttonSelected = document.querySelector("button")





// currency change
for (let select of dropdown){
    for (currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;

        //while looping as soon as the currCode value is USD then we in option we make it as selected
        if(select.name === "from" && currCode ==="USD"){
            //then we go into option tag in that have the attribute name as selected we give value 'selected'
            newOption.selected = 'selected'
        }
        if(select.name === "to" && currCode ==="INR"){
            //then we go into option tag in that have the attribute name as selected we give value 'selected'
            newOption.selected = 'selected'
        }
        select.append(newOption)

    };
};




// Attach event listeners for both 'from' and 'to' dropdowns

//  hum kya kar rahe forEach laga ke select jaise he change hota hai to hum kya karenege Us currency Ki value ko e.target.value se access karenege
// 
dropdown.forEach((select) => {

    select.addEventListener("change", (e) => {
        // it return's the countryList value i.e country Acronyms
        const selectedCurrency = countryList[e.target.value];

        //  yaha hum check karenge ki jab Currency change kiya hai Tab hum html file me select element mai name attribute ki value ko record kar rahe
        // jaise hi us ki value if "from " hogi to hum flagFrom ke flag ko change karenege
        if (select.name === "from") {
            // if mera select "from box" se hai to flagFrom ke box ka html mai src ki value ko change kar denege
            flagFrom.src = `https://flagsapi.com/${selectedCurrency}/flat/64.png`;
        }else if (select.name === "to"){ // same yaha bhi vahi ho raha hai
            flagTo.src = `https://flagsapi.com/${selectedCurrency}/flat/64.png`;
        }
   
    });
});






// ab kya hum button ko functionality denge

buttonSelected.addEventListener('click', async (e)=>{ // make the function async
    e.preventDefault();
    
    // accesing amount value that we enter
    let amount = document.querySelector(".amount input")
    let amountVal= parseFloat(amount.value)
    if (amountVal <1 || isNaN(amountVal)) {
        amount.value= 1
        amountVal = 1
    }
   
    //  modify the base url 
    const URL = `${BASEURL}${apiKey}/latest/${fromCurr.value}`
    // fetching the data from the url
    let reponse = await fetch(URL);
    let data = await reponse.json()
    console.log(data)
    // now we update the msg box
    console.log(fromCurr)
    msgbox.innerText = `1 ${fromCurr.value} = ${data.conversion_rates[toCurr.value]} ${toCurr.value}`

    //  now we calculate the new rate and update in the box resultAmount class input box
    const CalAmount= ((amountVal))* ((data.conversion_rates[toCurr.value]))
    
    let ConvertedAmountInputBox = document.getElementById("convertamt")
    ConvertedAmountInputBox.value = CalAmount
        
});
