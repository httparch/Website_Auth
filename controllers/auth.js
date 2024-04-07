
var text = document.querySelector("#textinput");
var pass = document.querySelector("#passinput");
var login = document.querySelector("#submit");
var readme = document.querySelector(".inactivelink");
let a = 0;

var countDownTime = 90;

function checkInput(){
  
    if((text.value=="admin")&&pass.value=="admin123"){
        document.querySelector(".signin").style.display = "none";
        document.querySelector("#readmore").classList.remove('disabled');

        alert("Login successful!");
        window.open("/public/assets/pup.html");      
        a++;
    }else{
        a++;
        if(a == 3){
            //set timer when number of attempts reached
  
            alert("Maximum atttempt reached, try again later!");
            document.querySelector(".signin").style.display = "none";
            //button change
            document.querySelector(".w_auth").style.cursor = 'none';
            document.querySelector(".w_auth").classList.add('disabled');

            var timer = setInterval(function(){
                
            var currentTime = countDownTime --;
            
            if(currentTime == 1){
                document.querySelector(".w_auth").innerHTML = currentTime + " second left.";
            }

            document.querySelector(".w_auth").innerHTML = currentTime + " seconds left.";
                
                if(currentTime < 0){
                    clearInterval(timer);
                    document.querySelector(".w_auth").classList.remove('disabled');
                    document.querySelector(".w_auth").style.cursor = 'pointer';
                    a = 0;
                    document.querySelector(".w_auth").innerHTML = "Click me!&#128519;";
                }
                
            }, 1000)


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