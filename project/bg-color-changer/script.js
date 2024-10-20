// making a list of color for each div
const listColorBg = ['#1F1C2C', '#928DAB', '#57C4C6', '#6A0572']
// also list for changing the color text of document according to suitable background
const listColorTxt = ['#FFFAF0', '#FFFFFF', '#3A2A8A', '#EAB8E4']
// i am selecting the element div that i want to change there colors
const colordiv = document.querySelectorAll('.divcolor');

// you can use forEach() or map() used to loop and set color from the list 
colordiv.forEach((individualDiv, index) =>{
    // now select each individual div and applying the eventListener of click
    individualDiv.addEventListener('click', function(){
        document.body.style.backgroundColor = listColorBg[index]
        document.body.style.color = listColorTxt[index]  
    });
});