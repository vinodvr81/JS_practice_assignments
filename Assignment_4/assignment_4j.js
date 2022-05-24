

function Popup(){
    var x = parseInt(document.getElementById("num").value);
    console.log(x);
    if (x> 0){
        return true;
    }
    else {        
        alert("number has to be greater than zero");
        return false;
    } 
    if (x%2==0){
        return true;
    } 
    else {        
        alert("number has to be even");
        return false;
    }  
    if (x*x<=100){
        return true;
    } 
    else {        
        alert("Square of number should be greater than 100");
        return false;
    } 
  
} 