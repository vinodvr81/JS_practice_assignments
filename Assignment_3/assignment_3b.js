
function infoSubmit(){
    var x = document.getElementById("upass").value;
    console.log(x);
    console.log(x.length)
    if (x.length >= 6){
        return true
    }
    else{
        return false
    }    
}    