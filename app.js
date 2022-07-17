document.mainForm.onclick = function(){
    var radVal = document.mainForm.fav_language.value;
    var second2 ;
    if(radVal == "user1"){
       radVal = "user1"
       console.log(radVal)
       second2 = "user2"
       console.log(second2)
    }
    else if  (radVal !== "user1"){
        radVal = "user2"
        second2 = "user1"
        console.log(radVal)
        console.log(second2)
    }
    document.getElementById("form-1").innerHTML = "You select :" + radVal + "<br/>" + "Opposition select :" + second2   
}


function Head(){
    radVal = "Head"
    second2 = "Tail"
    console.log("head Work")
 document.querySelector(".ht-a").innerHTML =  "Value of Yours is :" +  radVal +  "<br/>"  + " Value of Opposition is :" + second2 }

function Tail(){
    radVal = "Tail"
    second2 = "Head"
    console.log("Tail Work")
    document.querySelector(".ht-a").innerHTML =  "Value of Yours is  :" +  radVal   +  "<br/>"  + " Value of Opposition is :" + second2 
  
}

function winner1(){

  const months = ["user1","user2"];
  const random = Math.floor(Math.random() * months.length);
document.getElementById("winner2").innerText = "The Winner is   : " +  months[random]
}






function timer(){
    document.getElementById("some_div").style.display = "block";
    document.getElementById("some_div").style.marginTop = "12px";
    document.getElementById("some_div").style.marginBottom = "12px";
    var timeLeft = 10;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
       alert("Time has over!!!!!!")
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
}

