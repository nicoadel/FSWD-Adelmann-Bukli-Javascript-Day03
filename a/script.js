var numbers = [2,5,18,7,3,1];
var fh = [2,5,68,7,35,1];

temp ();
getHighest(numbers);
getHighest(fh);
//*Basic 3
document.write("<br><br><hr><br>");

document.getElementById("output_highest").innerHTML=(calculateProduct(numbers));


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
