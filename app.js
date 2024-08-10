const box = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
// alert("Welcome to the Game!");
let turnO = false;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

box.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        
        if(checkTie){
            // resetGame();
        }
        
    })
});

function checkTie(){
    let i = 0;
    for(let boxes =0;boxes <9;boxes++){
        
        if(box[boxes].innerText == ""){
            return false;
        }else{
            if(boxes == 9){
                // return true; 
            }
        }
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
        }
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for(let Box of box){
        Box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let Box of box){
        Box.disabled = false;
        Box.innerText = "";
    }
}
const resetGame = () =>{
    turnO = false;
    enableBoxes();
    msgContainer.classList.add("hide");
}


reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);