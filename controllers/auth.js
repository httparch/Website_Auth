
var text = document.querySelector("#textinput");
var pass = document.querySelector("#passinput");
var login = document.querySelector("#submit");
var readme = document.querySelector(".inactivelink");
let a = 0;

function checkInput(){

    
    if((text.value=="admin")&&pass.value=="admin123"){
        document.querySelector(".signin").style.display = "none";
        // readme.style.display = "none";
        
        alert("Login successful!");
        window.open("/public/assets/pup.html");
        a++;
    }else{
        a++;
        if(a == 3){
            //set timer when number of attempts reached
            //setTimeout
            alert("maximum atttempt reached, try again later!");
        }else{
            alert("Invalid credentials! Try again!, You still have " + (3 - a) + " attempts.");
        }
        console.log(a);
    }
  
}

login.addEventListener("click", checkInput);

// const a = document.querySelectorAll(".menu");
// const section = document.querySelectorAll("section");

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
//     a.forEach(ltx -> ltx.classList.remove("active"));
//     a[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll",activeMenu);