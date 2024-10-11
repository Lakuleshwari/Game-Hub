let userscore = 0;
let compscore = 0;


const choices =document.querySelectorAll(".choice");
 
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",  () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
         playgame(userchoice);
    });
});

const genCompchoice = () =>{
    const options =["rock","paper","scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
}

const drawgame = () =>{
    console.log("draw game");
    msg.innerText = "Game Draw";
}

const showwinner = (userwin) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = "You Win";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "You Lose";
    }
}






const playgame = (userchoice) =>{
    console.log("user choie =", userchoice);
    const compchoice = genCompchoice();
   if(userchoice === compchoice){
    drawgame();
   } 
   else{
     let userwin =true;
     if(userchoice === "rock"){
       userwin = compchoice === "paper" ? false : true;
     }
     else if(userchoice === "papper"){
        userwin = compchoice === "scissors" ? false : true;
     }
     else{
        userwin = compchoice === "rock" ? false : true;
     }
     showwinner(userwin);
   }
}