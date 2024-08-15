var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

//mousemove function
main.addEventListener("mousemove",function(movement){
    crsr.style.left =  movement.x+"px"
    crsr.style.top =  movement.y+"px"
})