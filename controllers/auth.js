
var text = document.querySelector("#textinput");
var pass = document.querySelector("#passinput");
var login = document.querySelector("#submit");
var Register = document.querySelector("#regsubmit");
var readme = document.querySelector(".inactivelink");

var reg_user = document.querySelector("#regtextinput");
var reg_pass = document.querySelector("#regpassinput");
var con_pass = document.querySelector("#conpassinput");

var user_holder;
var pass_holder;

let a = 0;

var countDownTime = 90;

function prepCreds(){
    if(reg_pass.value==con_pass.value){
        
        user_holder = reg_user.value;
        pass_holder = reg_pass.value;
        alert("Successfully Registered!");
        document.querySelector("#signups").style.display = "none";
        document.querySelector(".signin").style.display = "block";
    }else alert("Password dont match! Try again!");
}

function checkInput(){
  
    if((text.value==user_holder)&&pass.value==pass_holder){
        document.querySelector(".signin").style.display = "none";
        document.querySelector("#readmore").classList.remove('disabled');
        document.querySelector(".role-title").innerHTML = "admin";
        document.querySelector("#FA").innerHTML = "";
        alert("Login successful!");
        window.open("/Website_Auth/public/assets/pup.html");      
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
            
            if(currentTime <= 1){
                document.querySelector(".w_auth").innerHTML = currentTime + " second left.";
            }else document.querySelector(".w_auth").innerHTML = currentTime + " seconds left.";
            
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
Register.addEventListener("click", prepCreds)
