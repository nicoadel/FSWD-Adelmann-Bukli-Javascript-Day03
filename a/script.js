var numbers = [2,5,18,7,3,1];
var fh = [2,5,68,7,35,1];
var grades = [76,85,65,93,81];

temp ();
getHighest(numbers);
getHighest(fh);
//*Basic 3
document.write("<br><br><hr><br>");

document.getElementById("output_highest").innerHTML=(calculateProduct(numbers));

//*Interm 1
document.write("<br><br><hr><br>");

classGrades(grades);
FizzBuzz();

function temp (){
var a = (Math.floor(Math.random()*31)-5); 
	if (( -5 <= a ) && (a <= 10)) {
	   document.write("The weather is cold");
	   document.getElementById("warm_cold").src="cold.jpg";
	} else {
	   document.write("The weather is moderate");
	   document.getElementById("warm_cold").src="warm.jpg";
	}
}

function getHighest (array) {
	var highest = 0;
	for  ( var i = 0; i < array.length; i++) {
		if (array[i]> highest) {
			highest=array[i];
		}
	}
	document.write("highest number is: "+highest+"<br>");
}

function calculateProduct(product) {
	var x = 1;
	for ( var i = 0; i < product.length; i++) {
		x *= product[i];
	}
	return(x);
}

function calculateSum(product) {
	var x = 0;
	for ( var i = 0; i < product.length; i++) {
		x += product[i];
	}
	return(x);
}


function classGrades (grades) {
	var average = (calculateSum(grades)/5);
	document.write(average);

		if (average < 60) {
			document.write("-F");
			}
		if ((average < 70)&&(average >= 60)){
			document.write("-D");
			}
		if ((average < 80)&&(average >= 70)){
			document.write("-C");
			}
		if ((average < 90)&&(average >= 80)){
			document.write("-B");
			}
		if (average >= 90){
			document.write("-A");
			}
}

function FizzBuzz () {
		for  ( var i = 0; i < 101; i++) {
			if ((i%3==0)&&(i%5!=0)){
				
				document.write("Fizz<br>");
			}
			if ((i%5==0)&&(i%3!=0)){
				
				document.write("Buzz<br>");
			}
			if ((i%3==0)&&(i%5==0)){
				
				document.write("FizzBuzz<br>");
			}
			if (!(i%3==0)&&!(i%5==0)) {
				document.write(i+"<br>");
			}

			}
}

