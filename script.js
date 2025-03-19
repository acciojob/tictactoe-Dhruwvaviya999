//your JS code here. If required.
const formContainer = document.getElementsByClassName("container")[0];
const gridContainer = document.getElementsByClassName("grid-container")[0];

const startBtn = document.getElementById("submit").addEventListener("click", () => {
    const player1Name = document.getElementById("player-1").value;
    const player2Name = document.getElementById("player-2").value;
    const boxes = document.getElementsByClassName("box");
    const message = document.getElementsByClassName("message")[0];
    const box1 = document.getElementById("div1");
    const box2 = document.getElementById("div2");
    const box3 = document.getElementById("div3");
    const box4 = document.getElementById("div4");
    const box5 = document.getElementById("div5");
    const box6 = document.getElementById("div6");
    const box7 = document.getElementById("div7");
    const box8 = document.getElementById("div8");
    const box9 = document.getElementById("div9");

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

