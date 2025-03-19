//your JS code here. If required.
const formContainer = document.getElementsByClassName("container")[0];
const gridContainer = document.getElementsByClassName("grid-container")[0];

const startBtn = document.getElementById("submit").addEventListener("click", () => {
    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;
    const boxes = document.getElementsByClassName("box");
    const message = document.getElementsByClassName("message")[0];
    const box1 = document.getElementsByClassName("div1")[0];
    const box2 = document.getElementsByClassName("div2")[0];
    const box3 = document.getElementsByClassName("div3")[0];
    const box4 = document.getElementsByClassName("div4")[0];
    const box5 = document.getElementsByClassName("div5")[0];
    const box6 = document.getElementsByClassName("div6")[0];
    const box7 = document.getElementsByClassName("div7")[0];
    const box8 = document.getElementsByClassName("div8")[0];
    const box9 = document.getElementsByClassName("div9")[0];

    message.style.display = "block";
    turn = player1Name;
    message.innerText = `${turn}, you're up`;
    
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click", (e) => {
            if(turn === player1Name){
                boxes[i].innerText = "X";
                turn = player2Name;
                message.innerText = `${turn}, you're up`;
            } else {
                boxes[i].innerText = "O";
                turn = player1Name;
                message.innerText = `${turn}, you're up`;
            }

            if(box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X"){
                
            }

        })
    }

    formContainer.style.display = "none";
    gridContainer.style.display = "block";
});

