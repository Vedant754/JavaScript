let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = false;
let winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner = ()=>{
    for(pattern of winPatterns){
        // console.log(pattern);

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
//Mentioning the consition of empty is important as when the loop runs we check all position 
// and somehwere all null postions will match and will print winner is "" which we don't want
        if(posVal1 != "" && posVal2 !="" && posVal3 !=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log(`Winner is ${posVal1}`);
                showWinner(posVal1);
                // return true;
            }
        }
        
    }
}

const disableBoxes = ()=>{
    for (box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = ()=>{
    turnO = false;
    enableBoxes();
    msgContainer.classList.add("hide");


}

// Since we are accessing multiple boxes so we cannot direclt write boxes.addEventListener
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was Clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true // This we write so that if clicked on the same box we the text should not change
        checkWinner();
    })
})

resetBtn.addEventListener("click", ()=>{
    resetGame();
})
