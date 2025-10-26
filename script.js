let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;


//This is the pattern of winning rows------------

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];


//Giving inputs to the Game--------------------

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        checkWinner();

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});


//Draw Condition-------------------------

let gameDraw = () => {
    msg.innerText = `Game Draw.....`;
    msgContainer.classList.remove("hide");
    disable();
}


//Winner Condition--------------------

let checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                disable();
            }
        }
    }
}


//Showing the winning line---------------

let showWinner = (winner) => {
    msg.innerText =`Congratulations! Winner ${winner}`
    msgContainer.classList.remove("hide");
}
let disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


//Reset Condition----------------------

let resetGame = () => {
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

/*reset.addEventListener("click", () => {
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");
    
});*/








