temperature();
function temperature() {
	var randomNumber = (Math.floor(Math.random() * 31) - 5);
	if ((-5 <= randomNumber) &&(randomNumber <=10))
	{
		document.write("The weather is cold");	

	}
	else
	{
		document.write("The weather is moderate");	
	}
}