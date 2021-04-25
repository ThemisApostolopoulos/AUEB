window.onload = function(){
    let h1num = document.getElementsByTagName("h1")
    console.log("all of h1 headings");
    let count = 0;
       for(h1 of h1num){
           console.log(h1);
           count++;
       }
       console.log("num of h1: " + count);
    console.log("");
    //let p3rd = document.querySelector("p:nth-child(3)");
    //console.log("3rd paragraph is: "+p3rd.innerHTML);
    
    const d = new Date();     // Date obeject use
    let dayname = "";
    if(d.getDay() === 0){
        dayname = "Sunday";
    }else if (d.getDay() === 1){
        dayname = "Monday";
    }else if (d.getDay() === 2){
        dayname = "Tuesday";
    }else if (d.getDay() === 3){ 
        dayname = "Wednesday";
    }else if (d.getDay() === 4){  
        dayname = "Thursday";
    }else if (d.getDay() === 5){  
        dayname = "Friday";
    }else{
        dayname = "Saturday";
    }

    document.getElementsByClassName("grid-header").innerHTML = "Current Date: "+ d.getDate() +" " + dayname + " " + d.getFullYear(); // website changes footer based on the day of the week
}
    

 

var titleHeader = document.getElementById("header-text");
function myAlert(){
    titleHeader.style.textAlign = "center";
    titleHeader.style.color = "red";
    }



       
var headerButtonColor = document.getElementById("color-button");
headerButtonColor.onclick = changeColor();
function changeColor() {
    let x=document.getElementsByClassName("grid-header");
    x.style.backgroundColor="#e7c5f4";
    return false;   
}  





  



/*var headerColor = ["#6dc500", "#e7c500", "#e7c5f4"];
var i = 0;
document.querySelector("color-button").addEventListener("click", 
function(){
    if(i<headerColor.length){
        ++i;
    }else{
        i = 0;
    }
    document.getElementsByClassName("grid-header").style.background=headerColor[i];
}) */












