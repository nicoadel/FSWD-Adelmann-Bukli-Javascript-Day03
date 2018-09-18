var numbers = [1, 4, 5, 10, 20]
document.write(product(numbers));
temperature();

function temperature() {
    var randomNumber = (Math.floor(Math.random() * 31) - 5);
    if ((-5 <= randomNumber) && (randomNumber <= 10)) {
        document.getElementById("output").innerHTML = "the weather is cold";
        document.getElementById("outputimg").src = "cold.jpg";

    } else {
        document.getElementById("output").innerHTML = "the weather is moderate";
        document.getElementById("outputimg").src = "warm.jpg";
    }
}

function highestarray(array) {
    var number = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > number) {
            number = array[i]
        }
    }

}

function product(array) {
    var number = 1;
    for (var i = 0; i < array.length; i++) {
        number *= array[i]
    }
    return (number);
}