var istatus=document.querySelector("h5")
var btn=document.querySelector("#addfriend")
var check=0;

btn.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="Friends"
        istatus.style.color="Green"
        btn.innerHTML="Remove Friend"
        check=1
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="Red"
        btn.innerHTML="Add Friend"
        check=0
    }
})

