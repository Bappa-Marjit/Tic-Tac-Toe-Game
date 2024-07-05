
let btns = document.querySelectorAll('button');
let reset = document.querySelector(".resetBtn");
reset.innerText = "RESTART GAME"



let player1 =false;
let player2 =false;

let winParten = 
[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
count = 0;
btns.forEach((btn)=>{
    btn.addEventListener('click',async()=>{
        count++;
        console.log(count);
        if(player1==false){
            player1 = true;
            btn.innerText = "X";
            btn.disabled= true;
            
        }else{
            player1 = false;
            player2 = true;
            btn.innerText = "O";
            btn.disabled= true;
        }
        checkWinner();
    })
});

let draw =()=>{
    if(count>=9){
        count = false;
        document.querySelector("body").style.backgroundColor="red";
        document.querySelector("h2").innerText="MATCH-DRAW";
    }
}


let checkWinner = ()=>{
    for (let parten of winParten){
        let val1 = btns[parten[0]].innerText;
        let val2 = btns[parten[1]].innerText;
        let val3 = btns[parten[2]].innerText;
        if(val1 != "" && val2 != "" & val3 != ""){
            if(val1 == val2 && val2 == val3){
                document.querySelector("body").style.backgroundColor = 'green';
                let h2 = document.querySelector("h2");
                h2.innerText=`WINNER : ${val1}`;
                for(let btn of btns){
                    btn.disabled= true;
                }
            }else{
                draw();
            }
        }
    }
}

function resetGame(){
for(let btn of btns){
    btn.innerText = "";
    btn.disabled = false;
    count = 0;
}
document.querySelector("h2").innerText= "";
document.querySelector("body").style.backgroundColor = "#440381"
}

reset.addEventListener("click",()=>{
    resetGame();
    
});


