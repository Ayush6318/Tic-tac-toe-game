let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
    if(turnO){  // player 0 turns
        box.innerText = "O";
        turnO = false;
    }
    else{   // player x turns
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true; // for not changing again
    checkWinner();
    });
});

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showwinner = (winner)=>{
    msg.innerText = `congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = ()=>{
    for(pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
    if(pos1Val=== pos2Val && pos2Val===pos3Val){
        showwinner(pos1Val);
        
    }
    }

    }
};
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
