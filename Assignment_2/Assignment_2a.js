
var y = function(x){return ((x-32)*0.5556);
};
var x = parseInt(prompt('Enter the Fahrenheit which needs to be converted to celsius degree:'));
//y(3);
document.getElementById("demo").innerHTML = y(x);