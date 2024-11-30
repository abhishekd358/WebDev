let boxes = document.querySelectorAll(".box");

// selecting restart button
const restart = document.getElementById("restart")

let turn = true // for playerX and PlayerO



//  array for the possiblity of the winner patterns
const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    if (turn) {
        box.innerText = "X"
        box.style.backgroundColor= "#7fffd4"
        turn = false
    }else {
        box.innerText = "O"
        box.style.backgroundColor= "#ff83f1"
        turn = true
    }
    box.disabled = true;
    checkWinner();
    });
    
});


const checkWinner = () =>{
    for (let pattern of winnerPattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText; 
        let posval3= boxes[pattern[2]].innerText;
    
    if (posval1 !="" && posval2 !="" && posval3 !="") {
        if (posval1 === posval2  && posval2 ===posval3 ){
            document.getElementById("msg").innerHTML = `Congratulation! <span style="color: red;">${posval1}</span> Player Wins`;

            // Disable all boxes
            boxes.forEach((box) => {
                box.disabled = true;
                if (box.innerHTML === ""){
                    box.style.backgroundColor = "#51057d"
                }
            });

            return;
        } 
    } 
};
};


// reseting game
restart.addEventListener("click", () => {
    // Clear the inner text of all boxes
    boxes.forEach((box) => {
        box.innerText = ""; // Clear box content
        box.disabled = false; // Enable the box
        box.style.backgroundColor = "#9a05f0"
    });

    // Reset turn to Player X
    turn = true;

    // Clear the winner message
    document.getElementById("msg").innerHTML = "Let's Play the Game" ;
});