var count = 0;
for(var i = 0; i < 27; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
    if(count === 0){
    document.querySelector(".text").innerText=this.innerText;
    }
    else{
      document.querySelector(".text").innerText+=this.innerText;
    }
    count++;
})
}
