let boxes=document.querySelectorAll(".box")
let rst_btn=document.querySelector(".reset_button");
let new_btn=document.querySelector(".newgame-btn")
let msg_container=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
 let turnO=true;
 let count=0;
const draws=()=>{
   msg.innerText="DRAW"
   disable_boxes();
   msg_container.classList.remove("hide");
}

 const disable_boxes=()=>{
   for( let box of boxes){
       box.disabled=true;
   }
 }

 const enable_boxes=()=>{
   for( let box of boxes){
       box.disabled=false;
       box.innerText="";
   }
   
 }

 const reset_game=()=>{
   turnO=true;
   count=0;
   enable_boxes();
   msg_container.classList.add("hide");
 }
 const winPatterns=[
   [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
]

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
       if(turnO===true){
           box.innerText="O"
           turnO=false;
       }
       else{
           box.innerText="X"
           turnO=true;
       }
       box.disabled=true;
       count++;
      let isWinner= checkWinner();
       if(count === 9 &&!isWinner){draws()}
   })
});
const showWinner=(winner)=>{
   msg.innerText=`Congratulation! Winner is ${winner} `
   msg_container.classList.remove("hide");
   
};
const checkWinner=()=>{
   for(let pattern of winPatterns){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1 !="" && pos2 !="" && pos3 !="" ){
       if(pos1===pos2 &&pos2===pos3){
           
           disable_boxes();
           showWinner(pos1);
           return true;
           
       }
      }
   }
}
new_btn.addEventListener("click",reset_game)
rst_btn.addEventListener("click",reset_game)
console.log(count);
