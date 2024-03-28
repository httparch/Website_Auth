document.querySelector(".button_NA").addEventListener("click", function(){
    document.querySelector(".noAuth").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".noAuth").style.display = "none";
    document.querySelector(".wAuth").style.display = "none";
});

document.querySelector(".w_auth").addEventListener("click", function(){
    document.querySelector(".wAuth").style.display = "block";
    
});

document.querySelector(".login").addEventListener("click", function(){
    document.querySelector(".signin").style.display = "block";
    document.querySelector(".wAuth").style.display = "none";
});

document.querySelector("#butones").addEventListener("click", function(){
    document.querySelector(".signin").style.display = "none";
});