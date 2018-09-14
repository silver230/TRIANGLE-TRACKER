function triangle(){
    var A = parseFloat(document.getElementById('AB').value);
    var B = parseFloat(document.getElementById('BC').value);
    var C = parseFloat(document.getElementById('CA').value);

    var AB = A + B;
    var AC = A + C;
    var BC = B + C;

    if (A === B && B === C){
   alert("You have an equilateral triangle");
 }
   else if(A === B || B === C || A===C){
    alert("You have an isosceles triangle");
 }
    else if((AB > C) || (AC > B) || (BC > A)){
        alert("Scalene triangle formed");
 }
    else if((AB > C) || (AC > B) || (BC > A)){
     alert("Scalene triangle formed");
 }
     else {alert("try again");
 }
}
var displayWord = function(statements){
var statements = ["Revise your input" , "to determine" , "your triangle"];
statements.forEach(function(statements){
	alert("revise your input");
});
}
