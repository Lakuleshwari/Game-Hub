let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgcontainer =document.querySelector(".msgcontainer");

let turn0=true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 const restgame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
 }






boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled =true;
        checkwinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner =(winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}




const checkwinner = () =>{
   for(let pattern of winpatterns){
    
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;


    if(pos1 !="" && pos2 !="" && pos3!=""){
        if(pos1 === pos2  && pos2=== pos3){
            console.log("Winner", pos1);
            showwinner(pos1);
        }
    }
   }
}


newbtn.addEventListener("click", restgame);
resetbtn.addEventListener("click", restgame);