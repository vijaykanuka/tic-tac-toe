let buttons=document.querySelectorAll(".button")
let winner=document.querySelector("#winner");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
let Tie=document.querySelector("#tie");
let newgame=document.querySelector("#NewGame");
let restart=document.querySelector("#restart");
let player1Win=0;
let player2Win=0;
let tie=0;
let x=true;
let count=0;
let WinPattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (const button of buttons) {
    button.addEventListener("click",()=>{
        if(x)
          {
            button.innerText="X"
            button.style.color="red";
            x=false;
     
          }
        else
        {
          button.innerText="0"
          button.style.color="blue"
          x=true;
          
         }
        button.style.border="2px solid white"
        button.style.backdropFilter="blur(20px)"
        button.disabled=true;
        count++;
        win();
        if(count==9){
          WhoWin("tie")
          }

    })
   
}
function WhoWin(outcome){

  if(outcome=="X"){
    player1Win=player1Win+1
    player1.innerHTML=player1Win
  }
  else if(outcome=="0"){
    player2Win= player2Win+1
    player2.innerHTML=player2Win
  }
  else if(outcome=="tie"){
        tie=tie+1;
   
    Tie.innerHTML=tie
  }

}


function win()
{

 for (const pattern of WinPattern ) 
    {
        let p3=buttons[pattern[0]].innerText;
        let p1=buttons[pattern[1]].innerText;
        let p2=buttons[pattern[2]].innerText;
   

        if(p1!=""||p2!=""||p3!="")
          {
            
           
            if(p1==p2&&p2==p3)
             {
            
               winner.innerHTML=`The Winner Is ${p1}`;
               winner.style.visibility="visible"
               WhoWin(p1)
               buttons.forEach(e => {
               e.disabled=true
               });
             }
      
        }
  
          }
   

}
restart.addEventListener("click",()=>{
  buttons.forEach(e => {
    winner.innerHTML=""
    e.disabled=false;
    e.innerText="";
    e.style.border="2px solid black";
    count=0;
    x=true;
    });
})
newgame.addEventListener("click",()=>{
  buttons.forEach(e => {
    winner.innerHTML=""
    e.disabled=false;
    e.innerText="";
    e.style.border="2px solid black";
    player1.innerHTML=""
    player2.innerHTML=""
    Tie.innerHTML=""
    count=0;
    x=true;
    });
})
