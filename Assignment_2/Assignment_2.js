

var y = function(x){return x*x*x;
};
var x = parseInt(prompt('Enter the number for which you want to find the cube of it'));
//y(3);
document.getElementById("demo").innerHTML = y(x);