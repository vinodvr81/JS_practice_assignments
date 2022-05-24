x = parseInt(prompt("Please enter first number"));
y = parseInt(prompt("please enter second number"));

addition_num = x + y;

subtraction_num = x - y;

multiplication_num = x * y;

division_num = x/y;

str1 = "";
str1 += "Addition of two numbers is: "+ addition_num + "\n"; 
str1 += "Subtraction of two numbers is: "+ subtraction_num + "\n"; 
str1 += "Multiplication of two numbers is: "+ multiplication_num + "\n"; 
str1 += "Division of two numbers is: "+ division_num + "\n";  

document.getElementById("demo").innerHTML = str1;