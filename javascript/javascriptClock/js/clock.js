let userName;

while(!userName){
    userName = prompt("Adiniz Nedir?");
}

let nameDom = document.querySelector("#myName");

nameDom.innerHTML = `${userName.charAt(0).toUpperCase()}${userName.slice(1).toLowerCase()}`;


currentTime();



function currentTime() {

    let today = new Date();

    let days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let day = days[today.getDay()-1];
   
    let hr = today.getHours();

    let min = today.getMinutes();

    let sec = today.getSeconds();

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
  
    let clockDom = document.querySelector("#myClock");

    clockDom.innerHTML = `${hr}:${min}:${sec} ${day}`;

    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  


function checkTime(i){
    if(i<10){
        i= 0+i;
    }

    return i;
}