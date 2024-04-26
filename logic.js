let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".component");

let resetbtn=document.querySelector("#reset");

let msg=document.querySelector("#msgbox");

const draw=()=>{
    msg.innerHTML=`Game draw`;
    msg.style.backgroundColor="rgb(51 65 85)";
}
const compGenChoice=()=>{
    const options=["rock","scissors","paper"]
    let num=Math.floor(Math.random()*3);
    return options[num];
}

const displaymsg=(userWin,userChoice,compChoice)=>{
      if(userWin){
        msg.innerHTML=`you win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
      }
      else{
        msg.innerHTML=`you lose ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
      }
}
 const playGame=(userChoice)=>{
   let compChoice= compGenChoice();
console.log(compChoice);
console.log(userChoice);
   if(userChoice===compChoice){
    draw();
   }
   else{
    let userWin=true;
    if(userChoice==="rock"){
        //paper scissors
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice=="paper"){
        userWin=compChoice==="rock"?true:false;
    }
    else{
        userWin=compChoice=="rock"?false:true;
    }

    if(userWin) userScore++;
    else compScore++;
    let user=document.getElementById("user");
    let comp=document.getElementById("comp");

    displaymsg(userWin,userChoice,compChoice);
    user.innerHTML=userScore;
    comp.innerHTML=compScore;
         resetbtn.addEventListener("click",()=>{
            user.innerHTML=0;
            comp.innerHTML=0;
            userScore=0;
            compScore=0;
            msg.innerHTML="play the game";
         });
   }

 }

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playGame(userChoice);
    });
});
